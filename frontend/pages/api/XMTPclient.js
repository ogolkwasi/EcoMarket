import { useState } from 'react'; // Import useState hook from react

const ethers = require("ethers");
const { Client } = require("@xmtp/xmtp-js");

const recipientAddress = "0x3bcF60b44ba99e7994b075086c353062c6AE0480"; // recipient's address

export default async function sendMSG() {
  const [record, setRecord] = useState(''); // Define state for record variable

  if (typeof window !== 'undefined' && window.ethereum) { // Check if window and window.ethereum are defined
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      
      const xmtp = await Client.create(signer, { env: "dev" });
      
      console.log("Message from EcoMarket platform: ", await signer.getAddress());

      // Check if the recipient can receive messages (you need to define signature)
      const canMessage = await xmtp.canMessage(recipientAddress, signature);

      // Send a message (you need to define record)
      const conversation = await xmtp.conversations.newConversation(recipientAddress);
      const sent = await conversation.send(record);
      
      console.log("Message sent to recipient:", sent);
    } catch (error) {
      console.error("Error connecting to the wallet:", error);
    }
  } else {
    console.error("MetaMask or similar Ethereum wallet extension not detected.");
  }
}
