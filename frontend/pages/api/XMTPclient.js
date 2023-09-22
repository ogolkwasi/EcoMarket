import InputForm from './InputForm'


const ethers = require("ethers");
const { Client } = require("@xmtp/xmtp-js");

// Define the recipient's address
const recipientAddress = "0x3bcF60b44ba99e7994b075086c353062c6AE0480"; //  recipient's address

export default async function sendMSG() {

    const [record, setRecord] = useState('');
  // Connect to the user's wallet using their Ethereum provider (e.g., MetaMask)
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      
      // Initialize the xmtp client
      const xmtp = await Client.create(signer, { env: "dev" });
      
      console.log("Message from EcoMarket platform: ", await signer.getAddress());

      // Check if the recipient can receive messages (not necessary if you know the recipient's wallet can receive messages)
       const canMessage = await xmtp.canMessage(recipientAddress, signature);

      // Send a message
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
