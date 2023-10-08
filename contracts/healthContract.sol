// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./healthNFT.sol";

contract HealthContract { 
    address public client;
    address public provider;    
    uint256 public num_steps; 
    uint256 public min_exercise; 
    HealthNFT public healthNFT;

    address public vetTokenAddress; // Assuming you'll set this in the constructor or via a function.
    
    modifier onlyClient() {
        require(msg.sender == client, "Only the client can call this function.");
        _;
    }

    modifier onlyProvider() {
        require(msg.sender == provider, "Only the provider can call this function.");
        _;
    }
    
    constructor() public {
        client = 0x9b1Bad3F32367c26ec0C08b7387284E98eFb4d1B;
        provider = 0x9b1Bad3F32367c26ec0C08b7387284E98eFb4d1B;
    }

    function setClient (address x) external {
        client = x;
    }

    function setProvider (address x) external {
        provider = x;
    }

    function returnHealthNFT(uint _num_steps, uint _min_exercise) external onlyClient returns (address) {
        address x = 0x20812a3Fd9a2734EDa90508fb895B8d5dDa00b31;
        HealthNFT nft = HealthNFT(x);
        num_steps = _num_steps;
        min_exercise = _min_exercise;
        return address(nft); 
    }

    function transferTokens() external onlyProvider {
        require(num_steps >= 1000 && min_exercise > 60 , "Health score requirement not met."); 
        uint256 tokenAmount = calculateTokenAmount(); 
        payable(client).transfer(tokenAmount);
    }

    function calculateTokenAmount() internal view returns (uint256) {
        return 10;
    }
    
    function ifTokenTransfer() external view returns (bool) {
        return (num_steps >= 1000 && min_exercise > 60);
    }
}

