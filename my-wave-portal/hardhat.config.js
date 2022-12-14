require("@nomiclabs/hardhat-waffle");
// Import and configure dotenv
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      // This value will be replaced on runtime
      url: process.env.API_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    mainnet: {
      chainId: 1,
      url: process.env.API_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};