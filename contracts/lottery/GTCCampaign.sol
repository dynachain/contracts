pragma solidity ^0.8.20;

// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";

contract GTCCampaign is Ownable, Pausable {
    event CooldownUpdated(uint256 newCooldown);
    event NewEntry(address indexed owner, uint256 bucket);

    uint256 public cooldown;
    uint256 public timeOffset;
    uint256 public totalCheckins;
    
    mapping(address => uint256) private _lastCheckins;
    mapping(address => uint256) public entries;

    constructor(
        address initialOwner,
        uint256 _cooldown,
        uint256 _timeOffset
    ) Ownable(initialOwner) {
        cooldown = _cooldown;
        timeOffset = _timeOffset;
    }

    function checkin() public whenNotPaused {
        address account = _msgSender();
        uint256 currentTs = block.timestamp + timeOffset;

        uint256 timeBucket = currentTs / cooldown;
        require(
            _lastCheckins[account] < timeBucket,
            "Cooldown not passed yet"
        );
        _lastCheckins[account] = timeBucket;
        totalCheckins++;
        entries[account]++;

        emit NewEntry(account, timeBucket);
    }

    function setCooldown(uint256 _cooldown) public onlyOwner {
        cooldown = _cooldown;
        emit CooldownUpdated(_cooldown);
    }

    function setTimeOffset(uint256 _timeOffset) public onlyOwner {
       timeOffset = _timeOffset;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }
}
