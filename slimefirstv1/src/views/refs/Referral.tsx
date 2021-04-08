import React from 'react'
import styled from 'styled-components'
import { BaseLayout } from 'uikit'
import useI18n from 'hooks/useI18n' 
import Page from 'components/layout/Page'

import ReferralPanel from "./components/Refinfo" 
import ReferralTable from "./components/ReferralTable" 

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/slime/4.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 0px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/slime/4.png'), url('/images/slime/4b.png');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 12;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 12;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 12;
    }
  }
`


const Referral: React.FC = () => {

  return (
    <Page>
      <Cards>
       <ReferralPanel />
 
       <ReferralTable />
       </Cards>
    </Page>
  )
}

export default Referral

