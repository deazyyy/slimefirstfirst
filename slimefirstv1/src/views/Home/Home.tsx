import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from 'uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import ReferralPanel from "../refs/components/Refinfo" 
import ReferralTable from "../refs/components/ReferralTable" 

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/slime/3.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/slime/headr.png'), url('/images/slime/headl.png');
    background-position: 15% center, 85% center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" className="text">
        Slime Finance
        </Heading>
        <Text className="lgraycolor">The #1 Slime Farm on Binance Smart Chain.</Text>
      </Hero>
      <div style={{position:"relative"}}>
        <div className="homeCardouter">
          <div className="homeCardouter1">
            <Cards>
              <FarmStakingCard  />
              <TwitterCard/>
              <CakeStats />
              <TotalValueLockedCard />
            </Cards>
            < ReferralPanel  />
          </div>
          <div className="homeCardouter2">
            <ReferralTable />
          </div>
        </div>
        
        <img src="images/slime/4a.png" alt="slime" className="homebtmr"/>
        <img src="images/slime/4b.png" alt="slime" className="homebtml"/>
      </div>
    </Page>
  )
}

export default Home
