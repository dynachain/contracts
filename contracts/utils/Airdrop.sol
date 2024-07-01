// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Airdrop is Ownable {
    address public tokenAddr;

    constructor(
        address _tokenAddr,
        address initialOwner
    ) Ownable(initialOwner) {
        tokenAddr = _tokenAddr;
    }

    function dropTokens(
        address[] memory _recipients,
        uint256[] memory _amounts
    ) public onlyOwner returns (bool) {
        address msgSender = _msgSender();
        for (uint i = 0; i < _recipients.length; i++) {
            require(_recipients[i] != address(0));
            require(
                IERC20(tokenAddr).transferFrom(
                    msgSender,
                    _recipients[i],
                    _amounts[i]
                )
            );
        }

        return true;
    }

    function updateTokenAddress(address newTokenAddr) public onlyOwner {
        tokenAddr = newTokenAddr;
    }
}
