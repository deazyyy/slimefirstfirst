import { ChainId, WETH, Token, Fetcher } from '@pancakeswap-libs/sdk'
import { getDefaultProvider } from '@ethersproject/providers'
import BigNumber from 'bignumber.js'

const zombieToken = new Token(
  ChainId.MAINNET,
  '0xFCaeED4C19228f15971933B6C7aB24C671991Fd6',
  18,
)

const bonesToken = new Token(
  ChainId.MAINNET,
  '0x89edb758ce8e08a73e84cc9c827110fa875891c0',
  18,
)

const busdToken = new Token(
  ChainId.MAINNET,
  '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  18,
)
const supra = new Token(
  ChainId.MAINNET,
  '0x4ae2f11df681eec979bd93085dd1a05e9593c8c6',
  18,
)

export const getBusdBnbPrice = async () => {
  const pairData = await Fetcher.fetchPairData(
    busdToken,
    WETH[ChainId.MAINNET],
    getDefaultProvider('https://bsc-dataseed.binance.org/'),
  )

  return new BigNumber(parseFloat(pairData.token1Price.toSignificant()))
}

export const getZombieBnbPrice = async () => {
  const pairData = await Fetcher.fetchPairData(
    zombieToken,
    WETH[ChainId.MAINNET],
    getDefaultProvider('https://bsc-dataseed.binance.org/'),
  )

  return new BigNumber(parseFloat(pairData.token1Price.toSignificant()))
}
 const getSupraBnb = async () => {
  const pairData = await Fetcher.fetchPairData(
    supra,
    WETH[ChainId.MAINNET],
    getDefaultProvider('https://bsc-dataseed.binance.org/'),
  )

  return new BigNumber(parseFloat(pairData.token1Price.toSignificant()))
}

export const getBonesBnbPrice = async () => {
  const pairData = await Fetcher.fetchPairData(
    bonesToken,
    WETH[ChainId.MAINNET],
    getDefaultProvider('https://bsc-dataseed.binance.org/'),
  )

  return new BigNumber(parseFloat(pairData.token0Price.toSignificant()))
}


export default getSupraBnb