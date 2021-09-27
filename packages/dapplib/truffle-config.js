require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess kiwi suit food manage reward stick unveil half civil army gift'; 
let testAccounts = [
"0xda65d3ef89c3d82dac0e6e5c650742767c1ab65b877fdd8ece0cc85568a58806",
"0x4e502d05387af474953016b51b8893e0317cd5994b560a42786ac53bfee7c276",
"0x28dd59f6d90dbcadad84b695f8fb85ca9e359cde456d4e872a06e174c7fffdcc",
"0x4d96bf806e0ee0d6f6f2d02fae5eba4ac1100052682b2325d8d6ea5fc0d139d2",
"0xb10d3a5bf85be8b719c3036fdce05ad2388365cdfdab62bdc855fe9b7e8581ab",
"0x46c724adb199af78e111a34a703f2f10eac3598029062d3929f320a2b5cddaa8",
"0x375277353c049ae1bc925c9a68c3ff9310b69902ad566bd07ddcf873eb22ac30",
"0xaf4e37fc79859fe3477ca4e9c32cdc30498bf57b473a10c52aa1db090cff6eec",
"0x94ba1397e814e6702a988e1752aafd4cc4cd1beef6ea0b4aa354725945041062",
"0x57b4befd42e493f7b262a237b982c76f89afd587f59d82c93d129a2e898abe7a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

