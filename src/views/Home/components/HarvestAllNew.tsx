import React, { useMemo, useState, useCallback } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading, IconButton, AddIcon, MinusIcon, useModal } from 'uikit'
import useI18n from 'hooks/useI18n'
import {useStake} from 'hooks/useStake'
import useUnstake from 'hooks/useUnstake'
import { getBalanceNumber } from 'utils/formatBalance'
import { farmsConfig } from 'config/constants'
import { FarmConfig } from 'config/constants/types'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import HarvestAllNewModal from '../HarvestAllNewModal' 


export interface FarmWithBalance extends FarmConfig {
    balance: BigNumber
  }
  
interface FarmCardActionsProps { 
  balancesWithValue?: FarmWithBalance[]
}

const IconButtonWrapper = styled.div`
  display: flex;
  svg {
    width: 20px;
  }
`

  const HarvestAllNew: React.FC<FarmCardActionsProps> = ({ balancesWithValue}) => {
  const TranslateString = useI18n()
  // const { onStake } = useStake(pid)
  // const { onUnstake } = useUnstake(pid)
  const [pendingTx, setPendingTx] = useState(false)
 // const rawStakedBalance = getBalanceNumber(stakedBalance)
  const displayBalance = balancesWithValue.toLocaleString()

  const [onPresentDeposit] = useModal(<HarvestAllNewModal balancesWithValue={balancesWithValue} />)
 

  const renderStakingButtons = () => {
    return   (  
    <Button
    id="harvest-all"
    // disabled={balancesWithValue.length <= 0 || pendingTx}
    onClick={onPresentDeposit}
    fullWidth
  >
    {pendingTx
      ? TranslateString(548, 'Collecting slime')
      : TranslateString(999, `Harvest all (${balancesWithValue.length}) in one transaction (NEW) `)}
  </Button>
    )
  }

  return (
    <Flex justifyContent="space-between" alignItems="center">
      
      {renderStakingButtons()} 
    </Flex>
  )
}

export default HarvestAllNew
