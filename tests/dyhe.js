/*
Test delegation with history
*/
const {
  Signature,
  solidityPackedKeccak256,
  solidityPacked,
  toBeArray,
} = require("ethers");
const { expect } = require("chai");

describe("DYHE", function () {
  before(async function () {});

  it("should be able to mint NFT", async function () {
    const [deployer, opWallet] = await ethers.getSigners();
    const nft = await ethers.deployContract(
      "DynaHealth",
      [deployer.address, opWallet.address],
      {}
    );

    expect(await nft.totalSupply()).to.equal(0n);

    const tokenId = 1;
    const tokenURI = "https://api.dynachain.io/nft/1";
    const messageHash = ethers.solidityPackedKeccak256(
      ["uint256", "string"],
      [tokenId, tokenURI]
    );

    const signature = await opWallet.signMessage(toBeArray(messageHash));

    await expect(nft.safeMint(deployer.address, tokenId, tokenURI, signature))
      .to.not.reverted;
    expect(await nft.balanceOf(deployer.address)).to.equal(1n);
    expect(await nft.tokenURI(1)).to.equal(tokenURI);
  });
});
