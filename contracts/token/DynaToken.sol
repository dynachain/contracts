pragma solidity ^0.8.20;

// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";

contract DynaToken is ERC20Capped {
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        address treasury
    ) ERC20(name, symbol) ERC20Capped(initialSupply) {
        ERC20._mint(treasury, initialSupply);
    }

    function burn(uint256 value) public {
        address account = _msgSender();
        super._burn(account, value);
    }
}
