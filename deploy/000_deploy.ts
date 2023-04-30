import {HardhatRuntimeEnvironment} from 'hardhat/types';

async function deployment(hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy} = deployments;

  const {deployer} = await getNamedAccounts();

  console.log();
  console.log('!@#$%^&* Sec-urity Gensler Deployment Start! *&^%$#@!');
  console.log();

  await deploy('GenslerToken', {
    contract: 'GenslerToken',
    from: deployer,
    args: [],
    log: true,
  });

  await hre.run("verify:verify", {
    address: (await hre.deployments.get('GenslerToken')).address,
    constructorArguments: [],
  });
}

export default deployment;

deployment.tags = ['token'];
