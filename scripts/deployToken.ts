import { ethers } from "hardhat";

const deployArguments = require("./arguments/token");

(async () => {
  try {
    const contract = await ethers.deployContract(
      "DynaToken",
      deployArguments
    );
    await contract.waitForDeployment();

    console.log(`Token deployed to ${contract.target}`);
  } catch (e) {
    console.log(e);
  }
})();
