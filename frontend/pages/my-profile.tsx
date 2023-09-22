import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from 'react'
import TransactionHistory from "../components/transactionsHistoryDisplay"
//import TokensBalanceDisplay from "../components/tokensBalanceDisplay"
import { ethers , BigNumber } from 'ethers';



export default function Profile() {
  const [amount, setAmount] = useState<number | string>('');
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [walletBalance, setWalletBalance] = useState<number>(0);

  useEffect(() => {
    checkWalletConnection();
  }, []);

  const checkWalletConnection = async () => {
    if (window.ethereum) {
      setWalletConnected(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
  
      // Use the request method to get the user's address
      const address = await window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((accounts: string[]) => accounts[0])
        .catch(() => null);
  
      if (!address) {
        setWalletConnected(false);
        return;
      }
  
      setWalletAddress(address);
  
      const balance = await provider.getBalance(address);
      setWalletBalance(parseFloat(ethers.utils.formatEther(balance)));
    } else {
      setWalletConnected(false);
    }
  };

    return (
        <>
       
       
    <div className={styles.box_acc}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60%" }}>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 30 }}>My Profile</h1>
    </div>
    &nbsp;
     {/* Display connected wallet info */}
     {walletConnected && <h2>Connected Wallet: {walletAddress}</h2>}
        {walletBalance !== undefined && <h2>Wallet Balance: {walletBalance} ETH</h2>}
  
      <TransactionHistory walletAddress={walletConnected} chain={"ETH_MAINNET"} limit={"50"}/>
    </div>
  
    &nbsp;
    &nbsp;
   
    </>
    )
}