import React from 'react'
import useI18n from 'hooks/useI18n'
import { useFarmFromPid, useFarmFromSymbol, useFarmUser } from 'state/hooks'

import styled from 'styled-components'
import multicall from 'utils/multicall'
import { Text, Flex, Link, LinkExternal } from 'uikit'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { Address } from 'config/constants/types'
import erc20 from 'config/abi/erc20.json'
import { Farm } from 'state/types'
import BigNumber from 'bignumber.js'

export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
}
export interface ExpandableSectionProps {
  bscScanAddress?: string
  removed?: boolean
  totalValueFormated?: string
  totalValueUNFormated?:number
  lpLabel?: string
  quoteTokenAdresses?: Address
  quoteTokenSymbol?: string
  tokenAddresses: Address,
  farm: FarmWithStakedValue
}

const Wrapper = styled.div`
  margin-top: 24px;
`

const StyledLinkExternal = styled(LinkExternal)`
  text-decoration: none;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;

  svg {
    padding-left: 4px;
    height: 18px;
    width: auto;
    fill: ${({ theme }) => theme.colors.primary};
  }
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  bscScanAddress,
  removed,
  totalValueFormated,
  lpLabel,
  quoteTokenAdresses,
  quoteTokenSymbol,
  totalValueUNFormated,
  tokenAddresses,
  farm, 
}) => {
  const TranslateString = useI18n()
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, quoteTokenSymbol,tokenAddresses })
 
  const { allowance, tokenBalance, stakedBalance, earnings } = useFarmUser(farm.pid)
 
  let tokenbalancelo =0;

  
    tokenbalancelo = farm.tokenBalanceLP;
 
 
    const round = 5;

    let totalValue = 0;
    let lpusdvalue= 0;


   
    if(totalValueUNFormated!==null)
    {
      totalValue = totalValueUNFormated
    
      const valformatedd = totalValueUNFormated;
 
      if(tokenbalancelo!==null)
      {
        if( farm.lpSymbol==='DOGE'){
          lpusdvalue =  valformatedd/(tokenbalancelo/1e8);
          } else{
          
           lpusdvalue =  valformatedd/(tokenbalancelo/1e18);
        }
      }
    
     

   
    } 
  const userShare = stakedBalance.div(tokenbalancelo).toNumber() ;
  

  const userShareFT = (( Math.round(userShare * (10**round))/ (10**round))*100).toLocaleString();
  const userShareUSD = ( Math.round( (userShare*totalValue)* (10**4))/ (10**4));
 
 
  const userShareUSDTEXT=userShareUSD.toLocaleString();
  const lepinusp = ( Math.round( (lpusdvalue )* (10**4))/ (10**4)).toLocaleString();

 

  return (
    <Wrapper>
      <Flex justifyContent="space-between">
        <Text className="lgraycolor">{TranslateString(316, 'Stake')}:</Text>
        <StyledLinkExternal href={`https://exchange.pancakeswap.finance/#/add/${liquidityUrlPathParts}`}>
          {lpLabel}
        </StyledLinkExternal>
      </Flex>
      <Flex justifyContent="space-between">
      <Text className="lgraycolor">{TranslateString(23, 'Your share')}:</Text>
          <Text>{userShareFT} %</Text>
      </Flex>
    
      <Flex justifyContent="space-between">
      <Text className="lgraycolor">{TranslateString(23, 'Your deposit ')}:</Text>
          <Text>${userShareUSDTEXT}</Text>
      </Flex>
   

      {!farm.isTokenOnly ?  (
          <Flex justifyContent="space-between">
          <Text className="lgraycolor">{TranslateString(23, 'Lp value ')}:</Text>
              <Text>${lepinusp}</Text>
          </Flex>
      ):
        (   <Flex justifyContent="space-between">
        <Text>{TranslateString(23, 'Token value ')}:</Text>
            <Text>${lepinusp}</Text>
        </Flex>)

      }



      {!removed && (
        <Flex justifyContent="space-between">
          <Text className="lgraycolor">{TranslateString(23, 'Total Liquidity')}:</Text>
          <Text>{totalValueFormated}</Text>
        </Flex>
      )}
      <Flex justifyContent="flex-start">
        <Link external href={bscScanAddress} bold={false}>
          {TranslateString(356, 'View on BscScan')}
        </Link>
      </Flex>
    </Wrapper>
  )
}

export default DetailsSection
