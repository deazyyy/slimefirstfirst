import React from 'react'
import styled from 'styled-components'
import { Image, Button } from 'uikit'
import { CommunityTag } from 'components/Tags'
import useI18n from 'hooks/useI18n'
import Card from './Card'
import CardTitle from './CardTitle'

const Balance = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 34px;
  font-weight: 500;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
  margin-bottom: 16px;
`

const DetailPlaceholder = styled.div`
  display: flex;
  font-size: 14px;
`
const Value = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
`

const Footer = styled.div`
  border-top: 1px solid ${({ theme }) => (theme.isDark ? '#524B63' : '#E9EAEB')};
  padding: 24px;
`
const Coming: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Card className="comingproject">
      <div style={{ padding: '24px',position: "relative",top: "50%",transform: "translateY(-50%)"}}>
        <Image  src="/images/slime/bgcrc.png" width={64} height={64} mx="auto" mb="20px" alt="Your project here" />
        <CardTitle style={{ textAlign: 'center',marginBottom:0}}>
          Your Project?
        </CardTitle>
        <Button
          variant="disabled"
          as="a"
          href="https://t.me/slimefinance"
          external
          fullWidth
          my="20px"
          disabled
        >
          {TranslateString(418, 'Apply Now')}
        </Button>
        
        {/* <Balance>???</Balance> */}
        <Label className="lgraycolor" style={{ textAlign: 'center'}}>{TranslateString(416, 'Create a pool for your token')}</Label>
        
        {/* <DetailPlaceholder>
          <div style={{ flex: 1 }}>{TranslateString(736, 'APR')}:</div>
          <Value>??</Value>
        </DetailPlaceholder> */}
        {/* <DetailPlaceholder>
          <div style={{ flex: 1 }}>
            {TranslateString(384, 'Your Stake')}:
          </div>
          <Value>??? SLIME</Value>
        </DetailPlaceholder> */}
      </div>
      {/* <Footer>
        <CommunityTag />
      </Footer> */}
    </Card>
  )
}

export default Coming
