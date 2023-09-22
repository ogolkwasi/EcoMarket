require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config()
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString().trim()



module.exports = {
	solidity: {
		version: "0.8.13",
		settings: {
			optimizer: {
				enabled: true
			}
		}
	},
	
	allowUnlimitedContractSize: true,
	networks: {
		hardhat: {},
		GOERLI: {
			accounts: [privateKey],
			url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_Ethereum_Goerli}`,
			gasPrice: 1000000000,
		},
		mumbai: {
			accounts: [privateKey],
			url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_Polygon_Mumbai}`,
			gasPrice: 1000000000,
		},
		Polygon: {
			accounts: [privateKey],
			url: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_API_KEY_Polygon}`,
			gasPrice: 1000000000,
		},
		Celo: {
			accounts: [privateKey],
			url: `https://celo-mainnet.infura.io/v3/${process.env.INFURA_API_KEY_Celo}`,
			gasPrice: 1000000000,
		},
		CeloTest: {
			accounts: [privateKey],
			url: `https://celo-alfajores.infura.io/v3/${process.env.INFURA_API_KEY_celo_alfajores}`,
			gasPrice: 1000000000,
		},
		Arbitrum: {
			accounts: [privateKey],
			url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_Arbitrum}`,
			gasPrice: 1000000000,
		},
		ArbitrumTest: {
			accounts: [privateKey],
			url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_Arbitrum_Goerli}`,
			gasPrice: 1000000000,
		},
		OPT_MAINNET: {
			accounts: [privateKey],
			url: `https://opt-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_OPT_M}`,
			gasPrice: 1000000000,
		},
		OPT_GOERLI: {
			accounts: [privateKey],
			url: `https://opt-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_OPT_T}`,
			gasPrice: 1000000000,
		},
		
	},
	COVALENT: {
		apiKey: `${process.env.COVALENT_API_KEY}`
	},
	paths: {
		artifacts: '../fronted/artifacts'
	}
}