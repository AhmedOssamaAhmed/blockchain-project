require("@nomiclabs/hardhat-waffle");
const ICE_PRIVATE_KEY = "fb2fdf4aaea2cbfe6f865ec1fb7af1e5000beefc53d3cb2e10c2b4fa721aaa0a";
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
  networks: {
    testnet: {
      url: `https://arctic-rpc.icenetwork.io:9933`,
      accounts: [`0x${ICE_PRIVATE_KEY}`]
    }
  }
};
