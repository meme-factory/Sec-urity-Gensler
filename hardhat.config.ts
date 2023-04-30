import * as dotenv from 'dotenv';
dotenv.config();

import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"

import 'hardhat-deploy'
import '@nomiclabs/hardhat-ethers'
import '@nomicfoundation/hardhat-toolbox'

const {
  ARBITRUM_GOERLI_DEPLOYER_PRIVATE_KEY = '',
  ARBITRUM_DEPLOYER_PRIVATE_KEY = '',
  INFURA_ARBITRUM = '',
  INFURA_ARBITRUM_GOERLI = '',
  ETHERSCAN_ARBITRUM = '',
} = process.env

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{
      version: '0.5.16',
      settings: { optimizer: { enabled: true, runs: 200 }},
    }],
  },
  namedAccounts: {
    deployer: 0,
  },
  typechain: {
    outDir: 'deployments/types',
    target: 'ethers-v5',
  },
  networks: {
    arbitrumGoerli: {
      url: INFURA_ARBITRUM_GOERLI,
      accounts: [ARBITRUM_GOERLI_DEPLOYER_PRIVATE_KEY],
      tags: ['token'],
    },
    arbitrum: {
      url: INFURA_ARBITRUM,
      accounts: [ARBITRUM_DEPLOYER_PRIVATE_KEY],
      tags: ['token'],
    },
  },
  etherscan: {
    apiKey: {
      arbitrum: ETHERSCAN_ARBITRUM,
      arbitrumGoerli: ETHERSCAN_ARBITRUM,
    },
  },
};

export default config
