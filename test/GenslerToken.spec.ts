import { expect } from 'chai'
import { BigNumber, Contract, ethers, getDefaultProvider } from 'ethers'
import { MockProvider, deployContract } from 'ethereum-waffle'
import { _TypedDataEncoder, defaultAbiCoder, formatBytes32String, keccak256, parseBytes32String, toUtf8Bytes } from 'ethers/lib/utils'

import GenslerToken from '../artifacts/contracts/GenslerToken.sol/GenslerToken.json'

const toBig = (n: number, e: number = 18) => BigNumber.from(n).mul(BigNumber.from(10).pow(e))

const TEAM_SUPPLY_VAULT = "0x91a0477de2Ec316f01872A8376e3191D115873Ef";
const MARKETING_VAULT = "0x4db353F92a268a3F3BcDcD031808492816e0F00d";
const DAO_FUND_VAULT = "0x38c3A5B0cb7c7F4fc3ef9Fd94868e95dcf83Be51";
const LIQUIDITY_VAULT = "0x283b195AB4f7A7B813F95304120f146E9B94C2D1";
const LP_FARM_COMMUNITY_VAULT = "0xa9C4C79FDFa8Ff63735d3129C9B3041CE83030AA";

const TEAM_SUPPLY_ALLOCATION = toBig(84_000_000_000);
const MARKETING_ALLOCATION = toBig(42_000_000_000);
const DAO_FUND_ALLOCATION = toBig(42_000_000_000);
const LIQUIDITY_ALLOCATION = toBig(42_000_000_000);
const LP_FARM_COMMUNITY_ALLOCATION = toBig(210_000_000_000);
const GENSLER_TOTAL_SUPPLY_ALLOCATION = toBig(420_000_000_000);

describe("GenslerToken", function () {
  const provider = new MockProvider()

  const [gensler] = provider.getWallets()

  let token: Contract

  beforeEach(async () => {
    token = await deployContract(gensler, GenslerToken)
  })

  it('name, symbol, decimals, totalSupply, balanceOf, DOMAIN_SEPARATOR, PERMIT_TYPEHASH', async () => {
    const name = await token.name()

    // token data
    expect(name).to.eq('Sec-urity Gensler')
    expect(await token.symbol()).to.eq('GENSLER')
    expect(await token.decimals()).to.eq(18)
    
    // total supply
    expect(await token.totalSupply()).to.eq(GENSLER_TOTAL_SUPPLY_ALLOCATION)

    // supply allocation
    expect(await token.balanceOf(TEAM_SUPPLY_VAULT)).to.eq(TEAM_SUPPLY_ALLOCATION)
    expect(await token.balanceOf(MARKETING_VAULT)).to.eq(MARKETING_ALLOCATION)
    expect(await token.balanceOf(DAO_FUND_VAULT)).to.eq(DAO_FUND_ALLOCATION)
    expect(await token.balanceOf(LIQUIDITY_VAULT)).to.eq(LIQUIDITY_ALLOCATION)
    expect(await token.balanceOf(LP_FARM_COMMUNITY_VAULT)).to.eq(LP_FARM_COMMUNITY_ALLOCATION)

    // permit typehash
    expect(await token.PERMIT_TYPEHASH()).to.eq(
      keccak256(toUtf8Bytes('Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)'))
    )
  })
})
