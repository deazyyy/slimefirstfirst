import React, { useMemo, useState, useCallback } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { provider } from 'web3-core'
import { getContract } from 'utils/erc20'
import { Button, Flex, Text } from 'uikit'
import { Farm } from 'state/types'
import { communityFarms,stakePool } from 'config/constants'
import { useFarmFromPid, useFarmFromSymbol, useFarmUser } from 'state/hooks'
import useI18n from 'hooks/useI18n'
import UnlockButton from 'components/UnlockButton'
import { useApprove } from 'hooks/useApprove'
import Countdown, { CountdownRenderProps } from 'react-countdown'
import StakeAction from './StakeAction'
import HarvestAction from './HarvestAction'


const Action = styled.div`
  padding-top: 16px;
`
export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
}

interface FarmCardActionsProps {
  farm: FarmWithStakedValue
  ethereum?: provider
  account?: string
}

const CardActions: React.FC<FarmCardActionsProps> = ({ farm, ethereum, account }) => {
  const TranslateString = useI18n()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { pid, lpAddresses, tokenAddresses, isTokenOnly, depositFeeBP } = useFarmFromPid(farm.pid)
  const { allowance, tokenBalance, stakedBalance, earnings } = useFarmUser(pid)
  const lpAddress = lpAddresses[process.env.REACT_APP_CHAIN_ID]
  const tokenAddress = tokenAddresses[process.env.REACT_APP_CHAIN_ID];
  const lpName = farm.lpSymbol.toUpperCase()

  
  const isApproved = account && allowance && allowance.isGreaterThan(0)
 
 
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

  const renderApprovalOrStakeButton = () => {
    return isApproved ? (
      <StakeAction stakedBalance={stakedBalance} tokenBalance={tokenBalance} tokenName={lpName} pid={pid} depositFeeBP={depositFeeBP} />
    ) : (
      <Button mt="8px" fullWidth disabled={requestedApproval} onClick={handleApprove}>
        {TranslateString(999, 'Approve Contract')}
      </Button>
    )
  }

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
  let startTime=farm.startTime;
  if(!startTime)
  startTime=0;
  // setStartTime(500000000);
  const poolActive = startTime * 1000 - Date.now() <= 0 // startTime * 1000 - Date.now() <= 0

  const renderButton =  (!poolActive ? <Countdown date={new Date(startTime * 1000)} renderer={renderer} />   : renderApprovalOrStakeButton());
        
  return (
    <Action>
      <Flex>
        <Text bold textTransform="uppercase" className="text" fontSize="15px" pr="3px" mb="8px">
          {/* TODO: Is there a way to get a dynamic value here from useFarmFromSymbol? */}
          Slime Earned
        </Text>
        {/* <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
          {TranslateString(999, 'Earned')}
        </Text> */}
      </Flex>
      <HarvestAction earnings={earnings} pidx={pid} farm={farm} ethereum={ethereum}  account={account} />
      <Flex>
        <Text bold textTransform="uppercase" className="text"  fontSize="15px" pr="3px" mb="0px" mt="16px">
          {lpName} Staked
        </Text>
        {/* <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
          {TranslateString(999, 'Staked')}
        </Text> */}
      </Flex>
      {!account ? <UnlockButton mt="8px" fullWidth /> : renderButton}
    </Action>
  )
}

export default CardActions
