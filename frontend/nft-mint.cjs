const axios = require('axios')

// TIMEPieces contract address
const address =
    '0x3A60Dc72aF91B7173bE5e76A7E3c3544535d5439'

// Safe Haven Token ID
const tokenId = 2

// Alchemy API key
const apiKey = "nFDensqJj6-_Q-sIc6blDNf7WNM2ndz0";

// Alchemy URL
const baseURL = `https://eth-goerli.g.alchemy.com/nft/v2/${apiKey}/getOwnersForToken`;
const url = `${baseURL}?contractAddress=${address}&tokenId=${tokenId}`;

const config = {
    method: 'get',
    url: url,
};

axios(config)
    .then(response => console.log(response.data))
    .catch(error => console.log(error));