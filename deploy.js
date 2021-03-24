// Load private environmental variables into process.env
require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

// Assign ENV variables
const privateSeed = process.env.SEED_PHRASE
const ropsten = process.env.INFURA_ROPSTEN_KEY

// Create provider
const provider = new HDWalletProvider(
  privateSeed, ropsten
);

const web3 = new Web3(provider);