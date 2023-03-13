/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require("@openzeppelin/hardhat-upgrades");
require("@openzeppelin/test-helpers");
require("hardhat-contract-sizer");
require("solidity-coverage");
require("dotenv").config();

const { utils } = require('ethers');

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: "https://goerli.base.org",
        blockNumber: 15766491
      },
    },
    basegoerli: {
      url: "https://goerli.base.org",
      chainId: 84531,
      gasPrice: utils.parseUnits("100", "gwei").toNumber(),
      accounts: [process.env.DEPLOYER_WALLET  as string]
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/060ea3898f924ab7992641a46319d09f",
      chainId: 1,
      gasPrice: utils.parseUnits("100", "gwei").toNumber(),
      accounts: [process.env.DEPLOYER_WALLET  as string]
    },
  },
  solidity: {
    compilers: [
      {
        version: '0.8.15',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        },
      },
      {
        version: '0.8.17',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        },
      },
      {
        version: '0.6.12',
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999
          }
        },
      },
      {
        version: '0.6.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999
          }
        },
      },
      {
        version: '0.5.16',
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999
          }
        },
      },
    ],
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.BASE_API_KEY,
      basegoerli: process.env.BASE_API_KEY
    },
    customChains: [
      {
        network: "basegoerli",
        chainId: 84531,
        urls: {
         // Pick a block explorer and uncomment those lines
  
         // Blockscout
         // apiURL: "https://base-goerli.blockscout.com/api",
         // browserURL: "https://base-goerli.blockscout.com"
  
         // Basescan by Etherscan
         apiURL: "https://api-goerli.basescan.org/api",
         browserURL: "https://goerli.basescan.org"
        }
      }
    ]
  },
  mocha: {
    timeout: 200000
  }
};