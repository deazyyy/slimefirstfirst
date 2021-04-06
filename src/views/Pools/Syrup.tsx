import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { Heading } from 'uikit'
import { BLOCKS_PER_YEAR } from 'config'
import orderBy from 'lodash/orderBy'
import partition from 'lodash/partition'
import useI18n from 'hooks/useI18n'
import useBlock from 'hooks/useBlock'
import { getBalanceNumber } from 'utils/formatBalance'
import { useFarms, usePriceBnbBusd, usePools, usePriceCakeBusd } from 'state/hooks'
import { ChainId, WETH, Token, Fetcher } from '@pancakeswap-libs/sdk'
import { getDefaultProvider } from '@ethersproject/providers'

import { fetchFarmsConfigManual } from 'state/farms/fetchFarms'
import { QuoteToken, PoolCategory } from 'config/constants/types'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import Coming from './components/Coming'
import PoolCard from './components/PoolCard'
import PoolTabButtons from './components/PoolTabButtons'
import Divider from './components/Divider'

const BUSD = new Token(ChainId.MAINNET, '0xe9e7cea3dedca5984780bafc599bd69add087d56', 18)
const BNB = new Token(ChainId.MAINNET, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18)
const SLIME = new Token(ChainId.MAINNET, '0x4fcfa6cc8914ab455b5b33df916d90bfe70b6ab1', 18)
const SALT  = new Token(ChainId.MAINNET, '0x2849b1ae7e04a3d9bc288673a92477cf63f28af4', 18)
const SOAK  = new Token(ChainId.MAINNET, '0x849233ff1aea15d80ef658b2871664c9ca994063', 18)

  
const useSLIMEBnb = () => {
  const [price2, setPrice] = React.useState(new BigNumber(0))

  React.useEffect(() => {
    Fetcher.fetchPairData(
      SLIME,
      BUSD,
      getDefaultProvider('https://bsc-dataseed.binance.org/'),
    ).then((pairData) =>   new BigNumber(parseFloat(pairData.reserve1.toSignificant(4))/parseFloat(pairData.reserve0.toSignificant(4))))  
  }, [])

  return price2
}
const useSaltBUSD = () => {
  const [price2, setPrice] = React.useState(new BigNumber(0))

  React.useEffect(() => {
    Fetcher.fetchPairData(
      SALT,
      BNB,
      getDefaultProvider('https://bsc-dataseed.binance.org/'),
    ).then((pairData) => {
       
      setPrice(new BigNumber(parseFloat(pairData.reserve1.toSignificant(4))/parseFloat(pairData.reserve0.toSignificant(4))))
 
    })
  }, [])

  return price2
}
const supra = new Token(ChainId.MAINNET, '0x4Ae2f11Df681eEC979bD93085Dd1A05E9593c8C6', 18)

const useSupranusd = () => {
  const [price, setPrice] = React.useState(new BigNumber(0))

  React.useEffect(() => {
    Fetcher.fetchPairData(
      supra,
      BNB,
      getDefaultProvider('https://bsc-dataseed.binance.org/'),
    ).then((pairData) =>     setPrice(new BigNumber(parseFloat(pairData.reserve1.toSignificant(4))/parseFloat(pairData.reserve0.toSignificant(4))))  )
  }, [])

  return price
}
const useSoakBnb = () => {
  const [price, setPrice] = React.useState(new BigNumber(0))

  React.useEffect(() => {
    Fetcher.fetchPairData(
      SOAK,
      BNB,
      getDefaultProvider('https://bsc-dataseed.binance.org/'),
    ).then((pairData) =>     setPrice(new BigNumber(parseFloat(pairData.reserve1.toSignificant(4))/parseFloat(pairData.reserve0.toSignificant(4))))  )
  }, [])

  return price
}
const Farm: React.FC = () => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const { account } = useWallet()

  const farms = useFarms()
  const pools = usePools(account)
  const bnbPriceUSD = usePriceBnbBusd()

  const cakebusd = usePriceCakeBusd()


  const SALTP = useSaltBUSD();
  const SUPRA = useSupranusd();
  const SOAKbnb = useSoakBnb();


  const SALTPUSD = SALTP.multipliedBy(bnbPriceUSD);
  const SUPRAUSD = SUPRA.multipliedBy(bnbPriceUSD);
  const SOAKUSD = SOAKbnb.multipliedBy(bnbPriceUSD);
  const ssprice = useSLIMEBnb();


  let bbprice = new BigNumber(1);

  const block = useBlock()

  const priceToBnb = (tokenName: string, tokenPrice: BigNumber, quoteToken: QuoteToken): BigNumber => {
    const tokenPriceBN = new BigNumber(tokenPrice)
    if (tokenName === 'BNB') {
      return new BigNumber(1)
    }
    if (tokenPrice && quoteToken === QuoteToken.BUSD) {
      return tokenPriceBN.div(bnbPriceUSD)
    }
    return tokenPriceBN
  }

  const poolsWithApy = pools.map((pool) => {
    const isBnbPool = pool.poolCategory === PoolCategory.BINANCE
    const rewardTokenFarm = farms.find((f) => f.tokenSymbol === pool.tokenName)
    const stakingTokenFarm = farms.find((s) => s.tokenSymbol === pool.stakingTokenName)
    
    if(pool.tokenName==="SUPRA") 
      bbprice =SUPRAUSD;
    else if(pool.tokenName==="SALT"){
      bbprice =SALTPUSD;
    } else if(pool.tokenName==="SOAK"){
       bbprice = SOAKUSD ;  
    } else{
      const rewardTokenPriceInBNB = priceToBnb(
        pool.tokenName,
        rewardTokenFarm?.tokenPriceVsQuote,
        rewardTokenFarm?.quoteTokenSymbol,
      )
      bbprice =bnbPriceUSD.multipliedBy(rewardTokenPriceInBNB);

 
    }
    // /!\ Assume that the farm quote price is BNB
    const stakingTokenPriceInBNB = isBnbPool ? new BigNumber(1) : new BigNumber(stakingTokenFarm?.tokenPriceVsQuote)

    /*
 
    */

    const tvl = cakebusd.multipliedBy(pool.totalStaked);
    const rperyear =   bbprice.multipliedBy(pool.tokenPerBlock).multipliedBy(BLOCKS_PER_YEAR);
    const apy2 =rperyear.div(tvl);
  

    const totalRewardPricePerYear = bbprice.times(pool.tokenPerBlock).times(BLOCKS_PER_YEAR)
    const totalStakingTokenInPool = cakebusd.times(getBalanceNumber(pool.totalStaked))
    const apy = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100)

 
    return {
      ...pool,
      isFinished: pool.sousId === 0 ? false : pool.isFinished || block > pool.endBlock,
      apy,
    }
  })

  const [finishedPools, openPools] = partition(poolsWithApy, (pool) => pool.isFinished)

  return (
    <Page>
      <Hero>
        <div style={{margin:"auto"}}>
          <Heading as="h1" size="lg" className="text" mb="20px" style={{ textAlign: 'center' }}>
            {TranslateString(282, 'Launch Pool')}
          </Heading>
          <ul>
            <li className="lgraycolor" style={{ textAlign: 'center'}}>{TranslateString(580, 'Be part of our ecosystem.')}</li>
          </ul>
        </div>
      </Hero>
      <PoolTabButtons />
      <FlexLayout>
        <Route exact path={`${path}`}>
          <>
            {orderBy(openPools, ['sortOrder']).map((pool) => (
              <PoolCard key={pool.sousId} pool={pool} />
            ))}
            <Coming />
          </>
        </Route>
        <Route path={`${path}`}>
          {orderBy(finishedPools, ['sortOrder']).map((pool) => (
            <PoolCard key={pool.sousId} pool={pool} />
          ))}
        </Route>
      </FlexLayout>
    </Page>
  )
}

const Hero = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr;
  margin-left: auto;
  margin-right: auto;
  max-width: 250px;
  padding: 48px 0;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-size: 16px;
    li {
      margin-bottom: 4px;
    }
  }
  img {
    height: auto;
    max-width: 100%;
  }
  @media (min-width: 576px) {
    margin: 0;
    max-width: none;
  }
`

export default Farm
