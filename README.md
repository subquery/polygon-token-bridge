## ERC20 on Goerli and Mumbai

[SQToken-Goerli: 0x37B797EBE14B4490FE64c67390AeCfE20D650953]( https://goerli.etherscan.io/address/0x37B797EBE14B4490FE64c67390AeCfE20D650953)

[ChildERC20-Mumbai: 0x6677CE5ED9775B5D66BDF8AFAF43c7b52997Ee25](https://mumbai.polygonscan.com/address/0x6677CE5ED9775B5D66BDF8AFAF43c7b52997Ee25)

Contract Owner: `0x06724262F0cAfA3FE52baC90e48A877D1F75a209`

## Deploy contracts to goerli

```
truffle migrate --network goerli
```

## Contract Flatten

```
npx truffle-flattener ./contracts/SQToken.sol > ./flat/SQToken.sol
```
