// Overrides metamask v0.2 for 1.0 version.
// 1.0 lets us use async and await instead of promises.

import Web3 from 'web3'

// Overrides metamask v0.2 for our v 1.0
let web3
if(window.web3) { web3 = new Web3(window.web3.currentProvider) }

export default web3
