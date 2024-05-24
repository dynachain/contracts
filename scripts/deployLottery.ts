import { ethers } from "hardhat";

const deployArguments = require("./arguments/lottery");

(async () => {
  try {
    const contract = await ethers.deployContract(
      "DynaLottery",
      deployArguments
    );
    await contract.waitForDeployment();

    console.log(`Lottery deployed to ${contract.target}`);
  } catch (e) {
    console.log(e);
  }
})();
