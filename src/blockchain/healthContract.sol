// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract HealthContract { 
    address public client;
    address public provider;    
    uint256 public num_steps; 
    uint256 public min_exercise; 

    address public vetTokenAddress; // Assuming you'll set this in the constructor or via a function.
    
    modifier onlyClient() {
        require(msg.sender == client, "Only the client can call this function.");
        _;
    }
    
    constructor(address _client, address _provider, address _vetTokenAddress) public {
        client = _client;
        provider = _provider;
        vetTokenAddress = _vetTokenAddress;
    }

    function returnHealthNFT(uint _num_steps, uint _min_exercise) external onlyClient returns (address) {
        HealthNFT nft = new HealthNFT();
        num_steps = _num_steps;
        min_exercise = _min_exercise;
        return address(nft); 
    }

    function transferTokens() external onlyClient {
        require(num_steps >= 1000 && min_exercise > 60 , "Health score requirement not met."); 
        VETToken vetToken = VETToken(vetTokenAddress);
        uint256 tokenAmount = calculateTokenAmount(); 
        require(vetToken.transfer(provider, tokenAmount), "Token transfer failed.");
    }

    function calculateTokenAmount() internal view returns (uint256) {
        // Placeholder logic for calculating the token amount.
        // Adjust this based on your requirement.
        return 100;
    }
    
    function ifTokenTransfer() external view returns (bool) {
        return (num_steps >= 1000 && min_exercise > 60);
    }
}

contract HealthNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("HealthNFT", "VeHealth") {}

    function awardItem(address recipient) public returns (uint256) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        return newItemId;
    }
}

interface VETToken {
    function transfer(address recipient, uint256 amount) external returns (bool);
}
