const HDWalletProvider = require("@truffle/hdwallet-provider");  
const private_key = '';

module.exports = {  
 networks: {  
    goerli: {  
        provider: () => new HDWalletProvider(private_key, "https://eth-goerli.g.alchemy.com/v2/demo"),  
        network_id: 5  
    },
    mumbai: {  
        provider: () => new HDWalletProvider(private_key, "https://rpc-mumbai.matic.today"),  
        network_id: 80001  
    },
   },

 compilers: {  
    solc: {  
      version: "0.8.15",  
    }  
  }  
};