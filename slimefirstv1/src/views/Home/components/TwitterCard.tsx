import React from 'react'
import { Card, CardBody, Heading } from 'uikit'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import useI18n from 'hooks/useI18n'

const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`
const TwitterCard = () => {
  const TranslateString = useI18n()

  return (
    <StyledTwitterCard>
      <CardBody>
        <Heading size="lg" mb="24px"  className="headingcls">
          {TranslateString(10003, 'Announcements')}
        </Heading>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'SlimeFinance'
          }}
          options={{
            height: '300',
            chrome: "noheader, nofooter,noscrollbar ",
            width: "400"
          }}
        />
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
