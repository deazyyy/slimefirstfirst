import React, { useState, useEffect } from 'react'
import { hexToAscii } from 'web3-utils' 
import styled from 'styled-components' 
import { Heading, Card,Text } from 'uikit'
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
  // margin-bottom: 32px;
  // padding-top: 116px;
  text-align: center;
  padding: 35px 24px;

  ${({ theme }) => theme.mediaQueries.lg} {
    // background-image: url('/images/slime/2.png'), url('/images/slime/7.png');
    background-position: left center, right center;
    // min-height: 165px;
    // padding-top: 0;
  }
`
const useFetch = (uri: string,docall:boolean) => {
  const [data, setData] = useState(null)
  
  // empty array as second argument equivalent to componentDidMount
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(uri)
       
      const json = await response.json()
  
      setData(json.result)
    }
    if(!docall)
    fetchData()
  }, [uri,docall])
 
  return data
}

let refcountDone = false; 
let refTableDone = false;
const referralAddress= []; 
let refCount=-1;

const ReferralTable: React.FC = () => {
  const { account } = useWallet()
 
  const apikeylist = [
       "7X84G6IHIC2SCWVW2Z6FBVWJIA43BMEGB7",
      "VSHI3UDSF7XUCTQ5ZKY6SBQ985HACXNJUN",
      "GZ9PIDAJI8517CE84MGNHJ4T9T7YE7249Q",
      "QVQUB79SVKIUPNXGEMXBYVWGFQ7B5C71SH"
  ];

  const randomkey = Math.floor(Math.random() * (apikeylist.length - 0)) + 0;
  const apikey = apikeylist[randomkey];
 
  let accountwithout0x ="";
  if(account!=null)
  accountwithout0x= account.substring(2);

  

  const fulluri =`https://api.bscscan.com/api?module=proxy&action=eth_call&to=0x7Dae0C9386F784d900f68b54572B31c6b13C3572&data=0x3f7b06d8000000000000000000000000${accountwithout0x}&apikey=${apikey}`;
    refCount = useFetch(fulluri,refcountDone);
    const bignum = new BigNumber(refCount);
  const referralsInvitedurl = `https://api.bscscan.com/api?module=logs&action=getLogs&fromBlock=4993830&toBlock=latest&address=0x7Dae0C9386F784d900f68b54572B31c6b13C3572&topic1=0x000000000000000000000000${accountwithout0x}&apikey=${apikey}`;
  const refTable = useFetch(referralsInvitedurl,refTableDone);

  if(refCount>=0)
    refcountDone=true;
  
    if(refCount===0)
    refTableDone=true;

  if( referralAddress.length===0  )
  { 
    if(refTable)
    for(let i=0;i<refTable.length;i++)
    {
  
  
    const tx =refTable[i]; 
    if(tx.topics)
    {
        const topics = tx.topics;
       
        const farmtopic = topics[1];
 
        
        let removepad = farmtopic.substring(26);
        removepad=  `0x${removepad}` ;
        referralAddress.push({
            id: i,
            timestamp : 55,
            address : removepad
        });
        refTableDone=true;
    }
    
    }
  
 }
 
 
  return (
      <Card>
        <Hero>
        <Heading size="lg" mb="14px"  className="headingcls">
          Slime Friends
        </Heading>
        <Text className="lgraycolor"> Total Slime friends: {bignum.toString()}</Text>

            {referralAddress.map(function(k, a,kl){
                    return   <Text key={k.id} ><a  rel="noreferrer" target="_blank" href={`https://bscscan.com/address/${k.address}`}> {k.address}</a> </Text> ;
                  })}
       </Hero> 
       </Card>
  )
}

export default ReferralTable
