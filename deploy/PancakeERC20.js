 module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  await deploy("PancakeERC20", {
    from: deployer,
    log: true,
    deterministicDeployment: false
  })
}

module.exports.tags = ["PancakeERC20"]
module.exports.dependencies = ["PancakeFactory", "PancakePair"]
