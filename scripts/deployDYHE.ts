import { ethers } from "hardhat";

const deployArguments = require("./arguments/dyhe");

(async () => {
  try {
    const contract = await ethers.deployContract(
      "DynaHealth",
      deployArguments
    );
    await contract.waitForDeployment();

    console.log(`DYHE deployed to ${contract.target}`);
  } catch (e) {
    console.log(e);
  }
})();
