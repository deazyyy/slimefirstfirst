import React, { useMemo, useState, useCallback } from 'react'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading } from 'uikit'
import useI18n from 'hooks/useI18n'
import { useHarvest } from 'hooks/useHarvest'
import { getBalanceNumber,getBalanceBig } from 'utils/formatBalance'
import styled from 'styled-components'
import { Farm } from 'state/types'
import Countdown, { CountdownRenderProps } from 'react-countdown'
import UnlockButton from 'components/UnlockButton'
import { getContract, getTokenBalance } from 'utils/erc20'
import { useApprove } from 'hooks/useApprove'
import { provider } from 'web3-core'
import { stakePool } from 'config/constants'
import { useFarmFromPid, useFarmFromSymbol, useFarmUser } from 'state/hooks'
import {useStake} from '../../../../hooks/useStake'
import ReStakeAction from './ReStakeAction'

export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
}
interface FarmCardActionsProps {
  earnings?: BigNumber
  pidx?: number,
  farm: FarmWithStakedValue,
  ethereum?: provider,
  account?: string
}

const BalanceAndCompound = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`



const HarvestAction: React.FC<FarmCardActionsProps> = ({ earnings, pidx,farm, ethereum, account }) => {
  const TranslateString = useI18n()
  const [pendingTx, setPendingTx] = useState(false)
  const pidStakePool = stakePool.pid;
  const { onReward } = useHarvest(pidx)
  const { onStake } = useStake(pidx)

  const rawEarningsBalance = getBalanceBig(earnings)
  const rawEarningsBalanceNumber = getBalanceNumber(earnings)
   
  const displayBalance = rawEarningsBalanceNumber.toLocaleString()

  const [requestedApproval, setRequestedApproval] = useState(false)
 
 
  const { pid, lpAddresses, tokenAddresses, isTokenOnly, depositFeeBP } = useFarmFromPid(pidStakePool)

  const { allowance, tokenBalance, stakedBalance } = useFarmUser(pid)
  const isApproved = account && allowance && allowance.isGreaterThan(0)
  const lpAddress = lpAddresses[process.env.REACT_APP_CHAIN_ID]
  const tokenAddress = tokenAddresses[process.env.REACT_APP_CHAIN_ID];
  const lpName = stakePool.lpSymbol.toUpperCase()
 
  
const lpContract = useMemo(() => {
  if(isTokenOnly){
    return getContract(ethereum as provider, tokenAddress);
  }
  return getContract(ethereum as provider, lpAddress);
}, [ethereum, lpAddress, tokenAddress, isTokenOnly])

const { onApprove } = useApprove(lpContract)

const handleApprove = useCallback(async () => {
  try {
    setRequestedApproval(true)
    await onApprove()
    setRequestedApproval(false)
  } catch (e) {
     console.error(e)
  }
}, [onApprove])
const renderer = (countdownProps: CountdownRenderProps) => {
  const { hours, minutes, seconds } = countdownProps
  const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds
  const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes
  const paddedHours = hours < 10 ? `0${hours}` : hours
  return (
    <span style={{ width: '100%' }}>
       <p>  {farm.lpSymbol} pool starts:</p> {paddedHours}:{paddedMinutes}:{paddedSeconds}
    </span>
  )
} ;

const dis = true;
let startTime=farm.startTime;
if(!startTime)
startTime=0;
// setStartTime(500000000);
const poolActive = startTime * 1000 - Date.now() <= 0 // startTime * 1000 - Date.now() <= 0
const renderApprovalOrREStakeButton = () => {

  if(!poolActive)
  return (<Button disabled={dis} >{TranslateString(999, 'P. Stake')}</Button>);
  return (isApproved   ) ? (
    <ReStakeAction  stakedBalance={stakedBalance} rawEarningsBalance={rawEarningsBalance} tokenBalance={tokenBalance} tokenName={lpName} pid={pid} pidx={pidx}  depositFeeBP={depositFeeBP} />
  ) : (
    <Button   disabled={rawEarningsBalanceNumber === 0 || pendingTx || poolActive   }   onClick={handleApprove} className="harvest_btn">
      {TranslateString(999, 'Approve Stake ')}
    </Button>
  )

}


const renderButton =  (renderApprovalOrREStakeButton());
      

  return (
    <Flex mb='8px' justifyContent='space-between' alignItems='center'>
      <Heading className="harvestheading" color={rawEarningsBalanceNumber === 0 ? 'textDisabled' : 'text'} >{displayBalance}</Heading>
      {pidx !== stakePool.pid ? renderButton: " "}
      <BalanceAndCompound >
        {pidx === stakePool.pid ?
          <Button
            disabled={rawEarningsBalanceNumber === 0 || pendingTx}
            size='sm'
            variant='secondary'
            marginRight='10px'
            className="harvest_btn"
            onClick={async () => {
              setPendingTx(true)
              await onStake(rawEarningsBalanceNumber.toString())
              setPendingTx(false)
            }}
          >
            {TranslateString(999, 'Compound')}
          </Button>
          : null}
   
        <Button
          disabled={rawEarningsBalanceNumber === 0 || pendingTx}
          marginLeft='10px'
          className="harvest_btn"
          onClick={async () => {
            setPendingTx(true)
            await onReward()
            setPendingTx(false)
          }}
        >
          {TranslateString(999, 'Harvest')}
        </Button>
      </BalanceAndCompound>
    </Flex>
  )
}

export default HarvestAction
