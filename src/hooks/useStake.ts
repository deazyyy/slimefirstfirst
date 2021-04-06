import { useCallback,useState,useEffect } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync, updateUserStakedBalance, updateUserBalance } from 'state/actions'
import { stake, sousStake, sousStakeBnb,restake } from 'utils/callHelpers'
import { useMasterchef, useSousChef } from './useContract'


const useFetch   = (uri:string) => {

  const [data, setData] = useState(null);
 
  // empty array as second argument equivalent to componentDidMount
  useEffect(() => {
    async function fetchData() { 
      const response = await fetch(uri);
   
 
      const json = await response.json();
 
      setData(json.result);
    }
    fetchData();
  }, [uri]);
 
  return data;
};

export const useStake = (pid: number) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()
 
 
  const handleStake = useCallback(
    async (amount: string) => {
 
      const txHash = await stake(masterChefContract, pid, amount, account)
      dispatch(fetchFarmUserDataAsync(account))
     
    },
    [account, dispatch, masterChefContract, pid],
  )

  return { onStake: handleStake }
}
export const useReStake = (pid: number) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()
 
      
  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await restake(masterChefContract, pid, account)
      dispatch(fetchFarmUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, masterChefContract, pid],
  )

  return { onStake: handleStake }
}
export const useSousStake = (sousId, isUsingBnb = false) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()
  const sousChefContract = useSousChef(sousId)


  const handleStake = useCallback(
   
    async (amount: string) => {
  
      if (sousId === 0) {
        await stake(masterChefContract, 0, amount, account)
      } else if (isUsingBnb) {
        await sousStakeBnb(sousChefContract, amount, account)
      } else {
        await sousStake(sousChefContract, amount, account)
      }
      dispatch(updateUserStakedBalance(sousId, account))
      dispatch(updateUserBalance(sousId, account))
    },
    [account, dispatch, isUsingBnb, masterChefContract, sousChefContract, sousId],
  )

  return { onStake: handleStake }
}

export default useStake
