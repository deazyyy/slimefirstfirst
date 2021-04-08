import React, { useState, useEffect } from 'react'
import styled from 'styled-components' 
import { Heading,Card,Text } from 'uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'

const Hero = styled.div`
  align-items: center;
   
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 34px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    // background-image: url('/images/slime/3.png'), url('/images/slime/3b.png');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`
const useFetch = (uri: string) => {
  const [data, setData] = useState(null)

  // empty array as second argument equivalent to componentDidMount
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(uri)
       
      const json = await response.json()
  
      setData(json.result)
    }
    fetchData()
  }, [uri])
 
  return data
}
let refCount=-1;
let refcountDone = false; 
const ReferralPanel: React.FC = () => {
  const { account } = useWallet()
 
  const codex: string = useFetch(
    `https://slime.finance/codebyaddress/${account}`,
  )

  let accountwithout0x ="";
  if(account!=null)
  accountwithout0x= account.substring(2);
   
  const fulluri =`https://api.bscscan.com//api?module=proxy&action=eth_call&to=0x7Dae0C9386F784d900f68b54572B31c6b13C3572&data=0x3f7b06d8000000000000000000000000${accountwithout0x}&apikey=QVQUB79SVKIUPNXGEMXBYVWGFQ7B5C71SH`;
    refCount = useFetch(fulluri);
  

  if(!refCount)
  refCount=0;

  if(refCount>=0)
    refcountDone=true;
    const TranslateString = useI18n()
  const bignum = new BigNumber(refCount);
  return (
      <Card>
        <Hero>
        <Heading size="lg" mb="24px"  className="headingcls">
    
          Referral
        </Heading>
        <Text className="lgraycolor" mb="6px">{  `Earn 1.5% of your slime friends earnings! use this link to invite friends: ` }</Text>
        <a href={`https://slime.finance?slime-friend=${codex}`}>
              
        <Text style={{textDecoration:"underline"}}>{`https://slime.finance?slime-friend=${codex}` }</Text>
            </a>
            {/* <Text> Total Slime friends: {bignum.toString()}</Text> */}

        
       </Hero> 
       </Card>
  )
}

export default ReferralPanel
