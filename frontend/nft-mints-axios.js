import axios from 'axios';

  // Replace with your Alchemy API key:
  const apiKey = "demo"
  const baseURL = `https://eth-goerli.g.alchemy.com/v2/jSK8pnBpq_MxFqwEqbxm1Y7lZcPnCvmi/`;
  const axiosURL = `${baseURL}`;

  // Address we want get NFT mints from
  const toAddress = "0xaD96c0b51D5be8C190F2d7cdABbFd4173Af2b06c";

  let data = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 0,
  "method": "alchemy_getAssetTransfers",
  "params": [
    {
      "fromBlock": "0x0",
      "fromAddress": "0x0000000000000000000000000000000000000000",
      "toAddress": toAddress,
      "excludeZeroValue":true,
      "category": ["erc721","erc1155"]
    }
  ]
});


  var requestOptions = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: data,
  };

  const res = await axios(axiosURL, requestOptions);

  // Print contract address and tokenId for each NFT:
  for (const events of res.data.result.transfers) {
      if (events.erc1155Metadata == null) {
        console.log("ERC-721 Token Minted: ID- ", events.tokenId, " Contract- ", events.rawContract.address);
      }
      else{
        for (const erc1155 of events.erc1155Metadata) {
        console.log("ERC-1155 Token Minted: ID- ", erc1155.tokenId, " Contract- ", events.rawContract.address);
        }
      }
  }