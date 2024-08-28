import { Deployed, DeploymentManager } from "../../../plugins/deployment_manager";
import { FaucetToken, SimplePriceFeed } from "../../../build/types";
import { DeploySpec, cloneGov, deployComet, exp, sameAddress, wait } from "../../../src/deploy";

async function makeToken(
    deploymentManager: DeploymentManager,
    amount: number,
    name: string,
    decimals: number,
    symbol: string
): Promise<FaucetToken>{
    const mint = (BigInt(amount) * 10n ** BigInt(decimals)).toString();  // 10n = BigInt that contains 10
    return deploymentManager.deploy( symbol, 'test/FaucetToken.sol', [mint, name,decimals, symbol]);
}

async function makePriceFeed(
    deploymentManager: DeploymentManager,
    alias: string,
    initialPrice: number,
    decimals: number
): Promise<SimplePriceFeed>{
    return deploymentManager.deploy(alias, 'test/SimplePriceFeed.sol', [initialPrice * 1e8, decimals]);
}

export default async function deploy( deploymentManager: DeploymentManager, deploySpec: DeploySpec): Promise<Deployed>{
    const trace = deploymentManager.tracer();
    const ethers = deploymentManager.hre.ethers;
    const signer = await deploymentManager.getSigner();

    // Deploy Governance Contracts
    const { fauceteer, governor, timelock} = await cloneGov( deploymentManager);
    const DAI_token = await makeToken( deploymentManager, 100000000, 'DAI', 18, 'DAI');
    const NOT_token = await makeToken( deploymentManager, 100000000, 'Not Token', 6, 'NOT');
    const UNI_token = await makeToken( deploymentManager, 100000000, 'Uni Token', 18, 'UNI');

    const daiPriceFeed = await makePriceFeed( deploymentManager, 'DAI:priceFeed', 1, 8);
    const notPriceFeed = await makePriceFeed( deploymentManager, 'NOT:priceFeed', 5, 8);
    const uniPriceFeed = await makePriceFeed( deploymentManager, 'UNI:priceFeed', 3, 8);

    const assetConfig0 = {
        asset: NOT_token.address,
        priceFeed: notPriceFeed.address,
        decimals: (6).toString(),
        borrowCollateralFactor: (0.9e18).toString(),
        liquidateCollateralFactor: (0.91e18).toString(),
        liquidationFactor: (0.95e18).toString(),
        supplyCap: (2000000e6).toString(),
    };

    const assetConfig1 = {
        asset: UNI_token.address,
        priceFeed: uniPriceFeed.address,
        decimals: (18).toString(),
        borrowCollateralFactor: (0.4e18).toString(),
        liquidateCollateralFactor: (0.5e18).toString(),
        liquidationFactor: (0.9e18).toString(),
        supplyCap: (1000000e18).toString(),
    };

    const deployed =await deployComet( deploymentManager, deploySpec,{
        baseTokenPriceFeed: daiPriceFeed.address,
        assetConfigs: [assetConfig0, assetConfig1],
    });
    const {rewards} = deployed;

    await deploymentManager.idempotent(
        async () => (await NOT_token.balanceOf( rewards.address)).eq(0),
        async () => {
            trace(`Sending some NOT to CometRewards`);
            const amount = exp(1_000_000, 6);
            trace( await wait(NOT_token.connect(signer).transfer(rewards.address, amount)));
            trace(`NOT balanceOf(${rewards.address}): ${await NOT_token.balanceOf(rewards.address)}`);
        }
    );

    // MINT tokens
    trace(`Minting as ${signer.address} ...`);
    await Promise.all(
        [[NOT_token, 1e6], [DAI_token, 1e8], [UNI_token, 1e3]].map(([asset, units])=>{
            return deploymentManager.idempotent(
                async () => (await asset.balanceOf(fauceteer.address)).eq(0),
                async () => {
                    trace(`Minting ${units} ${await asset.symbol()} to fauceteer`);
                    const amount = exp( units, await asset.decimals());
                    trace(await wait( asset.connect(signer).allocateTo(fauceteer.address, amount)));
                    trace( `asset BalanceOf(${signer.address}): ${await asset.balanceOf(signer.address)}`);
                }
            );
        })
    );
}