// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Airdrop {
    constructor() {}

    function dropTokens(
        address _token,
        address[] memory _recipients,
        uint256[] memory _amounts
    ) public returns (bool) {
        for (uint i = 0; i < _recipients.length; i++) {
            require(_recipients[i] != address(0));
            require(
                IERC20(_token).transferFrom(
                    msg.sender,
                    _recipients[i],
                    _amounts[i]
                )
            );
        }

        return true;
    }
}
