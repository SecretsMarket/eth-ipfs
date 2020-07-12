import web3 from './web3';


// Deploy the smart contract on Rinkeby and change the address here (also the ABI just in case)

const address = '0xb84b12e953f5bcf01b05f926728e855f2d4a67a9';


//use the ABI from your contract
const abi = [
 [
	{
		"inputs": [],
		"name": "getHash",
		"outputs": [
			{
				"internalType": "string",
				"name": "x",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "x",
				"type": "string"
			}
		],
		"name": "sendHash",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
]
export default new web3.eth.Contract(abi, address);
