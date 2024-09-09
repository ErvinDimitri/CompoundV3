import 'dotenv/config';

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@compound-finance/hardhat-import';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import '@typechain/hardhat';
import 'hardhat-chai-matchers';
import 'hardhat-change-network';
import 'hardhat-contract-sizer';
import 'hardhat-cover';
import 'hardhat-gas-reporter';

// Hardhat tasks
import './tasks/deployment_manager/task.ts';
import './tasks/spider/task.ts';
import './tasks/scenario/task.ts';

//Relation config
import relationConfigMap from './deployments/relations';

const config: HardhatUserConfig = {
  solidity: "0.8.17",
};

export default config;
