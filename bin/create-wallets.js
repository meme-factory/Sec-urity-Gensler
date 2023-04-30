const ethers = require('ethers');

const wallets = [];

for (let i = 0; i < 5; i++) {;
  wallets.push(ethers.Wallet.createRandom())
}

const out = `
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!! Sec-urity Gensler Wallets !!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!! WARNING !! WARNING !! WARNING !! WARNING !! WARNING !!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!! Save the private keys and hold it in a safe place !!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

&& TEAM_SUPPLY_VAULT
&& Address: ${wallets[0].address}
&& Private Key: ${wallets[0].privateKey}
&& Mnemonic: ${wallets[0].mnemonic.phrase}

%% MARKETING_VAULT
%% Address: ${wallets[1].address}
%% Private Key: ${wallets[1].privateKey}
%% Mnemonic: ${wallets[1].mnemonic.phrase}

** DAO_FUND_VAULT
** Address: ${wallets[2].address}
** Private Key: ${wallets[2].privateKey}
** Mnemonic: ${wallets[2].mnemonic.phrase}

$$ LIQUIDITY_VAULT
$$ Address: ${wallets[3].address}
$$ Private Key: ${wallets[3].privateKey}
$$ Mnemonic: ${wallets[3].mnemonic.phrase}

## LP_FARM_COMMUNITY_VAULT
## Address: ${wallets[4].address}
## Private Key: ${wallets[4].privateKey}
## Mnemonic: ${wallets[4].mnemonic.phrase}

Hardcode the public keys in contracts/GenslerToken.sol contract

address public constant TEAM_SUPPLY_VAULT = ${wallets[0].address};
address public constant MARKETING_VAULT = ${wallets[1].address};
address public constant DAO_FUND_VAULT = ${wallets[2].address};
address public constant LIQUIDITY_VAULT = ${wallets[3].address};
address public constant LP_FARM_COMMUNITY_VAULT = ${wallets[4].address};

Enjoy!

`

console.log(out);
