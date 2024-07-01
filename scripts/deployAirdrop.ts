import { ethers } from "hardhat";

(async () => {
  try {
    const contract = await ethers.deployContract(
      "Airdrop"
    );
    await contract.waitForDeployment();

    console.log(`Airdrop deployed to ${contract.target}`);
  } catch (e) {
    console.log(e);
  }
})();
