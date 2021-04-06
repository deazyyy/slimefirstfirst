import React from 'react'
import { Text } from 'uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { getBalanceNumber,getFullDisplayBalance } from 'utils/formatBalance'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'

import useAllEarnings from 'hooks/useAllEarnings'
import CardValue from './CardValue'

interface CardValueProps {
  slimePrice?: BigNumber 
}

const CakeHarvestBalance: React.FC<CardValueProps> = ({slimePrice}) => {
  const TranslateString = useI18n()
  const { account } = useWallet()
  const allEarnings = useAllEarnings()
 
 
  const fixedget =   getBalanceNumber(slimePrice,0);
  const earningsSum = allEarnings.reduce((accum, earning) => {
 
    return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()  
  }, 0)
  const allvalue = earningsSum.toFixed(4);

  const allEarningsX = slimePrice.multipliedBy(earningsSum).toFixed(2) ;
  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '20px' }} className="farmlabelspan">
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

   

  return   (<Text fontSize="24px" style={{ lineHeight: '20px' }}> {` ${allvalue} ( ${allEarningsX} $ )`} </Text>)
}

export default CakeHarvestBalance
