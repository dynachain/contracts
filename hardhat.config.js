/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("@openzeppelin/hardhat-upgrades");
require("@nomicfoundation/hardhat-verify");

module.exports = {
  solidity: {
    version: "0.8.21",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_API_KEY,
    customChains: [
      {
        network: "opbnbtest",
        chainId: 5611,
        urls: {
          apiURL:
            `https://api-opbnb-testnet.bscscan.com/api`,
          browserURL: "https://opbnb-testnet.bscscan.com/",
        },
      },
      {
        network: "opbnb",
        chainId: 204,
        urls: {
          apiURL:
            `https://open-platform.nodereal.io/${process.env.ETHERSCAN_API_KEY}/op-bnb-mainnet/contract/`,
          browserURL: "https://opbnbscan.com/",
        },
      }
    ],
  },
  networks: {
    opbnbtest: {
      url: "https://opbnb-testnet-rpc.bnbchain.org/",
      chainId: 5611,
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 20000000000,
    },
    bsctest: {
      url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATE_KEY],
    },
    opbnb: {
      url: "https://opbnb-mainnet-rpc.bnbchain.org/",
      chainId: 204,
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 20000000000,
    },
    bsc: {
      url: `https://bsc-dataseed.bnbchain.org/`,
      chainId: 56,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATE_KEY],
    },
  }
};
