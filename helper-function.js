const { run } = require("hardhat")

const verify = async (contractAddress, args) => {
    console.log("Verfying on Etherscan...")
    try {
        // run take two parameter command and command arguments=address, args
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!")
        } else {
            console.log(e)
        }
    }
}

module.exports = { verify }
