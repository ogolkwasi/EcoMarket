//Goerli Testnet 
// ETH / USD 0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e

// Optimism Mainnet
// ETH / USD 0xb7B9A39CC63f856b90B364911CC324dC46aC1770

//Optimism Goerli 
// ETH / USD 0x57241A37733983F97C4Ab06448F244A1E0Ca0ba8

//  Mumbai Testnet
// MATIC/USD 0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada

//  Polygon
// MATIC/USD 0x7bac85a8a13a4bcd8abb3eb7d6b4d632c5a57676

// Arbitrum 
// ETH/USD  0x639fe6ab55c921f74e7fac1ee960c0b6293ba612
 
// Arbitrum_Goerli 
// ETH/USD 0x62CAe0FA2da220f43a51F86Db2EDb36DcA9A5A08

// SPDX-License-Identifier: MIT

//Celo mainnet 
// Celo/USD 0x0568fD19986748cEfF3301e55c0eb1E729E0Ab7e

//Alfajores testnet 
// Celo/USD 0x022F9dCC73C5Fb43F2b4eF2EF9ad3eDD1D853946

pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract DonationContract {

    using SafeMath for uint256;

    address payable public owner;
    address payable public platformOwner;
    address public oracleAddress = 0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e;
    uint256 public feePercent = 10;
    uint256 public totalDonations;

    event DonationMade(address indexed donor, uint256 amount);
    event WithdrawalMade(address indexed owner, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor(address payable _platformOwner) {
        owner = payable(msg.sender);
        platformOwner = _platformOwner;
    }

    receive() external payable {
        donate();
    }

    function donate() public payable {
        require(msg.value > 0, "You must send some ether");
        uint256 usdAmount = getUSDAmount(msg.value);
        uint256 feeAmount = usdAmount.mul(feePercent).div(100);
        uint256 donationAmount = usdAmount.sub(feeAmount);
        platformOwner.transfer(feeAmount);
        totalDonations = totalDonations.add(donationAmount);
        emit DonationMade(msg.sender, donationAmount);
    }

    function withdraw() public onlyOwner {
        require(totalDonations > 0, "There are no funds to withdraw");
        uint256 amount = totalDonations;
        totalDonations = 0;
        owner.transfer(amount);
        emit WithdrawalMade(owner, amount);
    }

    function getLatestPrice() public view returns (int) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(oracleAddress);
        (,int price,,,) = priceFeed.latestRoundData();
        return price;
    }

    function getUSDAmount(uint256 ethAmount) public view returns (uint256) {
        int price = getLatestPrice();
        require(price > 0, "Invalid price");
        uint256 usdAmount = ethAmount.mul(uint256(price)).div(1e18);
        return usdAmount;
    }
}
