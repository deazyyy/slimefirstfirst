import React, { useState, useCallback,useEffect } from 'react'
import { Card, CardBody, Heading, Text } from 'uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber,getFullDisplayBalance,getBalanceNumber2 } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`
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
const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms();
  const slimePrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = slimePrice.times(circSupply);


  const slimedevbalanceuri =`https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x4fcfa6cc8914ab455b5b33df916d90bfe70b6ab1&address=0x3b015df0f87a47b5b49b734a68e6b9d632ef5704&tag=latest&apikey=VSHI3UDSF7XUCTQ5ZKY6SBQ985HACXNJUN`;
  const slimedevbalanceCount = useFetch(slimedevbalanceuri);
   
  const Slimedevbalbig = getBalanceNumber(new BigNumber(slimedevbalanceCount)).toFixed(2);


  const slimedevbalanceuri2 =`https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x4fcfa6cc8914ab455b5b33df916d90bfe70b6ab1&address=0xBf7A1a19f861CFA3DcC7F9625c7cA73a40C63752&tag=latest&apikey=VSHI3UDSF7XUCTQ5ZKY6SBQ985HACXNJUN`;
  const slimedevbalanceCount2 = useFetch(slimedevbalanceuri2);
   
  const Slimedevbalbig2 = getBalanceNumber(new BigNumber(slimedevbalanceCount2)).toFixed(2);


  const slimedevbalanceuri22 =`https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x4fcfa6cc8914ab455b5b33df916d90bfe70b6ab1&address=0x000000000000000000000000000000000000dead&tag=latest&apikey=VSHI3UDSF7XUCTQ5ZKY6SBQ985HACXNJUN`;
  const slimedevbalanceCount22 = useFetch(slimedevbalanceuri22);
   
  const Slimedevbalbig22 = getBalanceNumber(new BigNumber(slimedevbalanceCount22)).toFixed(2);

  const slimePricegood =  getBalanceNumber2( slimePrice ).toFixed(2);
  
  let eggPerBlock = 0;
  if(farms && farms[0] && farms[0].eggPerBlock){
    eggPerBlock = Math.round(new BigNumber(farms[0].eggPerBlock).div(new BigNumber(10).pow(18)).toNumber() *10000)/10000;
  }
  
  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="lg" mb="24px"  className="headingcls">
          {TranslateString(534, 'slime Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px" className="statsrow">{TranslateString(536, 'Total slime Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} decimals={0} />}
        </Row>
       
        <Row>
          <Text fontSize="14px" className="statsrow">  Slime on treasury address </Text>
          <Text bold fontSize="14px">  {Slimedevbalbig} </Text>
        </Row>
        <Row>
          <Text fontSize="14px" className="statsrow">  Slime on dev address </Text>
          <Text bold fontSize="14px">  {Slimedevbalbig2} </Text> 
        </Row>
        <Row>
          <Text fontSize="14px" className="statsrow">{TranslateString(538, 'Total slime Burned')}</Text>
          <Text bold fontSize="14px">   {Slimedevbalbig22} </Text>
        </Row>
        <Row>
          <Text fontSize="14px" className="statsrow">  Slime price  </Text>
        <Text bold fontSize="14px">  ${slimePricegood} </Text>
        </Row>
        <Row>
          <Text fontSize="14px" className="statsrow">{TranslateString(999, 'Market Cap')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={3} prefix="$" />
        </Row>
       
        <Row>
          <Text fontSize="14px" className="statsrow"> {TranslateString(540, 'New slime/block')}</Text>
          <Text bold fontSize="14px">{eggPerBlock}</Text>
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
