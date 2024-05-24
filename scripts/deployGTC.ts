import { ethers } from "hardhat";

const deployArguments = require("./arguments/gtc");

(async () => {
  try {
    const contract = await ethers.deployContract(
      "GTCCampaign",
      deployArguments
    );
    await contract.waitForDeployment();

    console.log(`GTCCampaign deployed to ${contract.target}`);
  } catch (e) {
    console.log(e);
  }
})();
