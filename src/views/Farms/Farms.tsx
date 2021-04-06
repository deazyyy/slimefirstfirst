import React, { useEffect, useCallback, useState } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import Data from 'components/Data'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Image, Heading } from 'uikit'
import { BLOCKS_PER_YEAR } from 'config'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import Button from "uikit/components/Button/Button";
import { useFarms, usePriceBnbBusd, usePriceCakeBusd } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import { QuoteToken } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import FarmTabButtons from './components/FarmTabButtons'
import Divider from './components/Divider'

let endval;
export interface FarmsProps {
  tokenMode?: boolean
}
const useFetch = (uri: string) => {
  const [data, setData] = useState(null)
 
  // empty array as second argument equivalent to componentDidMount
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(uri)

      const json = await response.json()

 
      setData(json.result)
    }
    fetchData()
  }, [uri])

  return data
}
const Farms: React.FC<FarmsProps> = (farmsProps) => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const farmsLP = useFarms()
  const cakePrice = usePriceCakeBusd()
  const bnbPrice = usePriceBnbBusd()
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const { tokenMode } = farmsProps

  const referralapi = useFetch('https://slime.finance/getreferrer')

  Data.myreferrerdata = referralapi
  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const activeFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.multiplier !== '0X')
  const inactiveFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.multiplier === '0X')

  // /!\ This function will be removed soon
  // This function compute the APY for each farm and will be replaced when we have a reliable API
  // to retrieve assets prices against USD
  // if fourth argument is empty it means iterate till last
  const farmsList = useCallback(
    (farmsToDisplay, removed: boolean,init,end) => {
      if(end === 0)
        endval =  farmsToDisplay.length;
      else  
        endval = end;
      // const cakePriceVsBNB = new BigNumber(farmsLP.find((farm) => farm.pid === CAKE_POOL_PID)?.tokenPriceVsQuote || 0)
      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.slice(init, endval).map((farm) => {
        // if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
        //   return farm
        // }
        const cakeRewardPerBlock = new BigNumber(farm.eggPerBlock || 1)
          .times(new BigNumber(farm.poolWeight))
          .div(new BigNumber(10).pow(18))
        const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR)

        let apy = cakePrice.times(cakeRewardPerYear)

        let totalValue = new BigNumber(farm.lpTotalInQuoteToken || 0)

        if (farm.quoteTokenSymbol === QuoteToken.BNB) {
          totalValue = totalValue.times(bnbPrice)
        }

        if (totalValue.comparedTo(0) > 0) {
          apy = apy.div(totalValue)
        }

        return { ...farm, apy }
      })
      return farmsToDisplayWithAPY.map((farm) => (
        <FarmCard
          key={farm.pid}
          farm={farm}
          removed={removed}
          bnbPrice={bnbPrice}
          cakePrice={cakePrice}
          ethereum={ethereum}
          account={account}
        />
      ))
    },
    [bnbPrice, account, cakePrice, ethereum],
  )

  return (
    <Page className="farmpage">
      <Heading as="h1" size="lg" mb="20px" className="text" style={{ textAlign: 'center'}}>
        {tokenMode
          ? TranslateString(10002, 'Stake tokens to earn slime')
          : TranslateString(320, 'Stake LP tokens to earn slime')}
      </Heading>
      <Heading as="h2" className="lgraycolor" mb="50px" style={{ textAlign: 'center' ,fontWeight:500,fontSize:"18px" }}>
        {TranslateString(10000, 'Deposit Fee will be used to buyback slime')}
      </Heading>
      <FarmTabButtons />
      <div>
        {/* <Divider /> */}
        <h3 className="farminheading">Slime Swap</h3>
        <FlexLayout>  
          <Route exact path={`${path}`}>
            <div className="farmslimeheaderbxouter">
              <div className="farmslimeheaderbx">
                <img src="images/slime/navw.png" alt="navimg" />
                <Button>Farming</Button>
              </div>
            </div>
            
            {farmsList(activeFarms, false,0,3)}
          </Route>

        </FlexLayout>
        
        <h3 className="farminheading farminheadingpan mt-5">Pancake Swap</h3>
        <FlexLayout>  
          <Route exact path={`${path}`}>
            <div className="farmslimeheaderbxouter pancakebxouter">
              <div className="farmslimeheaderbx">
                <img src="images/slime/pancake.jpg" alt="navimg" />
                <Button>Farming</Button>
              </div>
            </div>
            {farmsList(activeFarms, false,3,0)}
          </Route>

        </FlexLayout>
        {/* <h3 className="farminheading">Pancake Swap</h3> */}
        <FlexLayout>
          <Route exact path={`${path}/history`}>
            {/* <div className="farmslimeheaderbx">
              <img src="images/slime/navw.png" alt="navimg" className="navlogo"/>
              <Button>Farming</Button>
            </div> */}
            {farmsList(inactiveFarms, true,0,0)}
          </Route>
        </FlexLayout>
      </div>
      <Image src="/images/slime/8.png" alt="illustration" width={1352} height={587} responsive />
    </Page>
  )
}

export default Farms
