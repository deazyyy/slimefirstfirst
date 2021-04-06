import BigNumber from 'bignumber.js'
import React, { useCallback, useMemo, useState } from 'react'
import { Button, Input, Modal } from 'uikit'
import ModalActions from 'components/ModalActions'
import TokenInput from 'components/TokenInput'
import useI18n from 'hooks/useI18n'
import { FarmConfig } from 'config/constants/types'
import { getFullDisplayBalance } from 'utils/formatBalance'
import  {useReStake} from 'hooks/useStake'

interface DepositModalProps {
    balancesWithValue,
    onDismiss?: () => void
}

export interface FarmWithBalance extends FarmConfig {
    balance: BigNumber
  }
  
const HarvestAllNewModal: React.FC<DepositModalProps> = ({ balancesWithValue ,onDismiss}) => {

    const max=10;
  const [val, setVal] = useState('')
  const [pendingTx, setPendingTx] = useState(false)
  const TranslateString = useI18n()
 
 
  let names="";
  for(let i=0;i<balancesWithValue.length;i++){
    names+=`${balancesWithValue[i].lpSymbol}`;  
    if(i<balancesWithValue.length-1)
    names+=" , "
  }
  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setVal(e.currentTarget.value)
    },
    [setVal],
  )
 const tx=true;
  return (
    <Modal title='Harvest All Pools (Released after audit)' onDismiss={onDismiss}>
             To harvest:
      <Input
        value= {names}
      
      />
      <ModalActions>
        <Button variant="secondary" onClick={onDismiss} >
          {TranslateString(462, 'Cancel')}
        </Button>
   
        <Button
         // disabled={pendingTx}
         disabled={tx}
          onClick={async () => {
            setPendingTx(true)
             
            setPendingTx(false)
            onDismiss()
          }}
        >
          {pendingTx ? TranslateString(488, 'Pending Confirmation') : TranslateString(464, 'Confirm')}
        </Button>
      </ModalActions>
    </Modal>
  )
}

export default HarvestAllNewModal
