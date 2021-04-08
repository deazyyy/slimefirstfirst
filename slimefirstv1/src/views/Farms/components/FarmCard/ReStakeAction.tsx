import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading, IconButton, AddIcon, MinusIcon, useModal } from 'uikit'
import useI18n from 'hooks/useI18n'
import  {useReStake} from 'hooks/useStake'
import useUnstake from 'hooks/useUnstake'
import { getBalanceNumber } from 'utils/formatBalance'
import { useFarmFromPid, useFarmFromSymbol, useFarmUser } from 'state/hooks'
import ReStakeModal from '../ReStakeModal'
import WithdrawModal from '../WithdrawModal'

interface FarmCardActionsProps {
  stakedBalance?: BigNumber
  tokenBalance?: BigNumber
  tokenName?: string
  rawEarningsBalance?:BigNumber
  pid?: number,
  pidx?: number,
  depositFeeBP?: number
}

const IconButtonWrapper = styled.div`
  display: flex;
  svg {
    width: 20px;
  }
`

const ReStakeAction: React.FC<FarmCardActionsProps> = ({ stakedBalance,rawEarningsBalance, tokenBalance, tokenName, pid,pidx, depositFeeBP}) => {
  const TranslateString = useI18n()

  const ffarm = useFarmFromPid(pidx)
 
  const { onStake } = useReStake(ffarm.pid)
  const { onUnstake } = useUnstake(pid)

  const rawStakedBalance = getBalanceNumber(stakedBalance)
  const displayBalance = rawStakedBalance.toLocaleString()
 
  const [onPresentDeposit] = useModal(<ReStakeModal max={rawEarningsBalance} onConfirm={onStake} tokenName={tokenName} depositFeeBP={depositFeeBP} />)
  const [onPresentWithdraw] = useModal(
    <WithdrawModal max={stakedBalance} onConfirm={onUnstake} tokenName={tokenName} />,
  )

  const dis= true;
  const renderStakingButtons = () => {
    return rawEarningsBalance.toNumber() === 0 ? (
      <Button disabled={dis} onClick={onPresentDeposit}>{TranslateString(999, 'P. Stake')}</Button>
    ) : (
      <Button  onClick={onPresentDeposit}>{TranslateString(999, 'P. Stake')}</Button>
    )
  }

  return (
    <Flex justifyContent="space-between" alignItems="center">
       
      {renderStakingButtons()}
    </Flex>
  )
}

export default ReStakeAction
