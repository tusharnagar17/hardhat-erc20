const networkConfig = {
    31337: { name: "localhost" },
    11155111: { name: "sepolia" },
}

const INITIAL_SUPPLY = 1000000000000 // 1 ** 10*18

const developmentChains = ["localhost", "hardhat"]

module.exports = { networkConfig, developmentChains, INITIAL_SUPPLY }
