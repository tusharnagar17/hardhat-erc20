const { network } = require("hardhat")
const { developmentChains, networkConfig, INITIAL_SUPPLY } = require("../helper-hardhat-config")
const { verify } = require("../helper-function")

module.exports = async ({ deployments, getNamedAccounts }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const ourToken = await deploy("OurToken", {
        from: deployer,
        args: [INITIAL_SUPPLY],
        log: true,
        // wait for delay to submit on live network to deploy.
        waitConfirmation: network.config.blockConfirmation || 1,
    })
    log(`Your contract deploy to ${ourToken.address}`)

    if (!developmentChains.includes(network.name)) {
        await verify(ourToken.address, [INITIAL_SUPPLY])
    }
}
