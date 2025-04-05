// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract GuardianNet {
    struct Alert {
        uint256 id;
        string sourceIP;
        string destinationIP;
        string threatType;
        uint256 timestamp;
    }

    Alert[] public alerts;
    address public owner;

    event NewAlert(
        uint256 indexed id,
        string sourceIP,
        string destinationIP,
        string threatType,
        uint256 timestamp
    );

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function logAlert(
        string memory sourceIP,
        string memory destinationIP,
        string memory threatType
    ) public onlyOwner {
        uint256 id = alerts.length;
        alerts.push(Alert(id, sourceIP, destinationIP, threatType, block.timestamp));
        emit NewAlert(id, sourceIP, destinationIP, threatType, block.timestamp);
    }

    function getAlert(uint256 id) public view returns (Alert memory) {
        require(id < alerts.length, "Invalid ID");
        return alerts[id];
    }

    function getAllAlerts() public view returns (Alert[] memory) {
        return alerts;
    }
}
