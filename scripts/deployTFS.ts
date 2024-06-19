import { ethers } from "hardhat";

const deployArguments = require("./arguments/tfs");

(async () => {
  try {
    const contract = await ethers.deployContract(
      "TheFoundingStone",
      deployArguments
    );
    await contract.waitForDeployment();

    console.log(`TFS deployed to ${contract.target}`);
  } catch (e) {
    console.log(e);
  }
})();
