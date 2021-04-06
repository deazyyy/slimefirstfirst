import React, { useState, useCallback } from 'react'


import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from 'uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import BigNumber from 'bignumber.js'
import UnlockButton from 'components/UnlockButton'
import  HarvestAllNew from './HarvestAllNew'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'


const StyledFarmStakingCard = styled(Card)`
  // background-image: url('/images/slime/2a.png');
  background-size: 100px 100px;
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const Block = styled.div`
  margin-top: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
    
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`
interface CardValueProps {
  slimePrice?: BigNumber 
}

const FarmedStakingCard : React.FC<CardValueProps>= ({slimePrice}) => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
    const slimePriceX = usePriceCakeBusd();
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)
   
  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  const dis = true;
  const renderApprovalOrREStakeButton = () => {

    if(!account)
    return (<Button disabled={dis} >{TranslateString(999, 'P. Stake')}</Button>);

    return ( <HarvestAllNew  balancesWithValue={balancesWithValue} /> );
  
  }
  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading size="lg" mb="24px"  className="headingcls">
          {TranslateString(542, 'Farms & Staking')}
        </Heading>
        {/* <CardImage src="/images/slime/2.png" alt="cake logo" width={64} height={64} /> */}
       
        <Actions>
          {account ? (
            <Button
              id="harvest-all"
              disabled={balancesWithValue.length <= 0 || pendingTx}
              onClick={harvestAllFarms}
              fullWidth
            >
              {pendingTx
                ? TranslateString(548, 'Collecting slime')
                : TranslateString(999, `Harvest all (${balancesWithValue.length}) Legacy `)}
            </Button>
          ) : (
            <UnlockButton fullWidth />
          )}
        </Actions>
        {/* <Actions>
        {account ? renderApprovalOrREStakeButton() : (
            <UnlockButton fullWidth />
          )}
        </Actions> */}
        <Block className="farm-block" style={{marginTop:"30px"}}>
          <Label className="farm-block-lbl">Slime to Harvest</Label>
          <CakeHarvestBalance  slimePrice={slimePriceX} />
        </Block>
        <Block className="farm-block">
          <Label className="farm-block-lbl">Slime in Wallet</Label>
          <CakeWalletBalance  slimePrice={slimePriceX} />
        </Block>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
