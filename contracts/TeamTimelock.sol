// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./GenslerToken.sol";

contract TeamTimelockVault {
    uint256 public startTime;
    address public team; // the team can release
    uint256 public constant totalSupply = 84_000_000_000 ether; // a portion of the total supply
    uint256 public constant duration = 1 weeks; // only once a week
    uint256 public constant numPeriods = 156; // over 3 years
    uint256 public constant amountPerPeriod = 538_461_538 ether;
    uint256 public periodsReleased = 0;
    
    constructor() {
        team = msg.sender;
        startTime = block.timestamp;
    }
    
    function releaseSupply(address to) public {
        require(msg.sender == team, "Only the team can release supply");

        uint256 nextReleaseTime = 1 weeks * (periodsReleased + 1);

        require(block.timestamp >= nextReleaseTime, "Team cannot relase already");

        GenslerToken.transfer(to, amountPerPeriod);

        periodsReleased += 1;
    }
}
