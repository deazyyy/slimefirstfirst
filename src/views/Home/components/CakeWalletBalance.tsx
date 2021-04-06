import React from 'react'
import { Text } from 'uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useTokenBalance from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import BigNumber from 'bignumber.js'
import { getCakeAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import CardValue from './CardValue'

interface CardValueProps {
  slimePrice?: BigNumber 
}

const CakeWalletBalance : React.FC<CardValueProps> = ({slimePrice}) => {
  const TranslateString = useI18n()
  const cakeBalance = useTokenBalance(getCakeAddress())
  const { account } = useWallet()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '14px' }} className="farmlabelspan">
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }
  const fixedget =   getBalanceNumber(cakeBalance,18).toFixed(4);
  const allEarningsX = slimePrice.multipliedBy(getBalanceNumber(cakeBalance,18)).toFixed(2) ;
  return   (<Text   fontSize="24px" style={{ lineHeight: '60px' }}> {` ${fixedget} ( ${allEarningsX} $ )`} </Text>)

}

export default CakeWalletBalance
