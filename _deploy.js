// Load private environmental variables into process.env
require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');


// Assign ENV variables
const mnemonic = process.env.SEED_PHRASE;
const privateKey = process.env.PRIVATE_KEY;
const network = process.env.INFURA_API_KEY;
const address = 1;

// Create provider
const provider = new HDWalletProvider(mnemonic, network);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(`Attempting to deploy from account`, accounts[address])

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hello World'] })
    .send({ from: accounts[address] });
  
    console.log(`Contract deploying to`, result.options.address);
};

deploy();

// const result = await new web3.eth.Contract(JSON.parse(interface))
//      .deploy({data: '0x' + bytecode, arguments: ['Hi there!']}) // add 0x bytecode
//      .send({from: accounts[0]}); // remove 'gas'