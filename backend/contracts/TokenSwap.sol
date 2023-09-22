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

//ECO token address 
//0x1bB5122dE2Db0D7803bd048c809b0B6501D88353

// SPDX-License-Identifier: MIT
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

//ECO token address 
//0x1bB5122dE2Db0D7803bd048c809b0B6501D88353

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract TokenSwap is Ownable {
    using SafeMath for uint256;

    uint256 public feePercent = 10;
    address payable public platformOwner; 
    uint256 public totalTransfer;

     address public ecoContractAddress = 0xf5Bef18c6C8DFCD7Df2247b40B39CFcFF6311aAf;
    address public oracleAddress = 0x62CAe0FA2da220f43a51F86Db2EDb36DcA9A5A08;

    constructor(address payable _platformOwner) {
        platformOwner = _platformOwner;
    }

    function getLatestPrice() public view returns (int) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(oracleAddress);
        (, int price, , , ) = priceFeed.latestRoundData();
        return price;
    }

    function getUSDAmount(uint256 ethAmount) public view returns (uint256) {
        int price = getLatestPrice();
        require(price > 0, "Invalid price");
        uint256 usdAmount = ethAmount.mul(uint256(price)).div(1e18);
        return usdAmount;
    }

    function buyTokens(uint256 totalPriceInUSD, uint256 numberOfTokensToBuy) public payable {
        require(msg.value > 0, "You must send some ether");
        uint256 usdAmount = getUSDAmount(msg.value);
        require(usdAmount >= totalPriceInUSD, "Insufficient funds");
        uint256 feeAmount = totalPriceInUSD.mul(feePercent).div(100);
        uint256 transferAmount = totalPriceInUSD.sub(feeAmount);
        platformOwner.transfer(feeAmount);
        totalTransfer = totalTransfer.add(transferAmount);
        emit DonationMade(msg.sender, transferAmount);

        uint256 ecoTokensToTransfer = numberOfTokensToBuy;
        IERC20 ecoToken = IERC20(ecoContractAddress);

        require(ecoToken.balanceOf(address(this)) >= ecoTokensToTransfer, "Not enough ECO tokens in the contract");

        // Transfer the ETH to the contract owner
        payable(owner()).transfer(msg.value);

        // Transfer the ECO tokens to the user
        ecoToken.transfer(msg.sender, ecoTokensToTransfer);
    }

    function withdrawExcessEth() public onlyOwner {
        // Transfer all excess ETH to the contract owner
        payable(owner()).transfer(address(this).balance);
    }

    function withdrawExcessEcoTokens() public onlyOwner {
        // Transfer all excess ECO tokens to the contract owner
        IERC20 ecoToken = IERC20(ecoContractAddress);
        ecoToken.transfer(owner(), ecoToken.balanceOf(address(this)));
    }

    event DonationMade(address indexed sender, uint256 amount);
}
