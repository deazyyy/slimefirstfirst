import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import useI18n from 'hooks/useI18n'
import { ChevronDown, ChevronUp } from 'react-feather'
import Balance from 'components/Balance'
import { CommunityTag, CoreTag, BinanceTag } from 'components/Tags'
import { PoolCategory } from 'config/constants/types'

const tags = {
  [PoolCategory.BINANCE]: BinanceTag,
  [PoolCategory.CORE]: CoreTag,
  [PoolCategory.COMMUNITY]: CommunityTag,
}

interface Props {
  projectLink: string
  totalStaked: BigNumber
  blocksRemaining: number
  isFinished: boolean
  blocksUntilStart: number
  poolCategory: PoolCategory
}

const StyledFooter = styled.div<{ isFinished: boolean }>`
  border-top: 1px solid ${({ theme }) => (theme.isDark ? '#524B63' : '#E9EAEB')};
  color: ${({ isFinished, theme }) => theme.colors[isFinished ? 'textDisabled2' : 'primary2']};
  padding: 24px;
`

const StyledDetailsButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  height: 32px;
  justify-content: center;
  outline: 0;
  padding: 0;
  &:hover {
    opacity: 0.9;
  }

  & > svg {
    margin-left: 4px;
  }
`

const Details = styled.div`
  margin-top: 24px;
`

const Row = styled.div`
  align-items: center;
  display: flex;
`

const FlexFull = styled.div`
  flex: 1;
`
const Label = styled.div`
  font-size: 14px;
`

const Label2 = styled.div`
font-size: 13px;
`
const TokenLink = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: #12aab5;
`

const CardFooter: React.FC<Props> = ({
  projectLink,
  totalStaked,
  blocksRemaining,
  isFinished,
  blocksUntilStart,
  poolCategory,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const TranslateString = useI18n()
  const Icon = isOpen ? ChevronUp : ChevronDown

  const handleClick = () => setIsOpen(!isOpen)
  const Tag = tags[poolCategory]


  const startIntSeconds = blocksUntilStart*3;
  const d = Math.floor(startIntSeconds / (3600*24));
  const h = Math.floor(startIntSeconds % (3600*24) / 3600);
  const m = Math.floor(startIntSeconds % 3600 / 60);
  const s = Math.floor(startIntSeconds % 60);

  const dDisplay = d > 0 ? d + (d === 1 ? " day, " : " days, ") : "";
  const hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
  const mDisplay = m > 0 ? m + (m === 1 ? " minute " : " minutes ") : "";
  const sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";

  const starttimeDisplay = dDisplay + hDisplay + mDisplay ; 



  const endIntSeconds = blocksRemaining*3;
  const dend = Math.floor(endIntSeconds / (3600*24));
  const hend = Math.floor(endIntSeconds % (3600*24) / 3600);
  const mend = Math.floor(endIntSeconds % 3600 / 60);
  const send = Math.floor(endIntSeconds % 60);

  const dDisplayEnd = dend > 0 ? dend + (dend === 1 ? " day, " : " days, ") : "";
  const hDisplayEnd = hend > 0 ? hend + (hend === 1 ? " hour, " : " hours, ") : "";
  const mDisplayEnd = mend > 0 ? mend + (mend === 1 ? " minute " : " minutes ") : "";
  const sDisplayEnd = send > 0 ? send + (send === 1 ? " second" : " seconds") : "";

  const endtimeDisplay = dDisplayEnd + hDisplayEnd + mDisplayEnd ; 
  return (
    <StyledFooter isFinished={isFinished}>
      <Row>
        <FlexFull>
          <Tag />
        </FlexFull>
        <StyledDetailsButton onClick={handleClick}>
          {isOpen ? 'Hide' : 'Details'} <Icon />
        </StyledDetailsButton>
      </Row>
      {isOpen && (
        <Details>
          <Row style={{ marginBottom: '4px' }}>
            <FlexFull>
              <Label>
                <span role="img" aria-label="syrup">
                   {' '}
                </span>
                Total
              </Label>
            </FlexFull>
            <Balance fontSize="14px" isDisabled={isFinished} value={getBalanceNumber(totalStaked)} />
          </Row>
          {blocksUntilStart > 0 && (
            <Row>
              <FlexFull>
                <Label>Start (Blocks):</Label>
              </FlexFull>
              <Balance fontSize="14px" isDisabled={isFinished} value={blocksUntilStart} decimals={0} />
            </Row>
          )}
         {blocksUntilStart > 0 && (
            <Row>
              <FlexFull>
                <Label>Start (Time):</Label>
              </FlexFull>
              <Label2> {starttimeDisplay}</Label2>
            </Row>
          )}
          {blocksUntilStart === 0 && blocksRemaining > 0 && (
            <Row>
              <FlexFull>
                <Label>End (Blocks):</Label>
              </FlexFull>
              <Balance fontSize="14px" isDisabled={isFinished} value={blocksRemaining} decimals={0} />
            </Row>
          )}
             {blocksUntilStart === 0 && blocksRemaining > 0 && (
            <Row>
              <FlexFull>
                <Label>End (Time):</Label>
              </FlexFull>
              <Label2 > {endtimeDisplay}</Label2>
            </Row>
          )}
          <TokenLink href={projectLink} target="_blank">
            {TranslateString(412, 'View project site')}
          </TokenLink>
        </Details>
      )}
    </StyledFooter>
  )
}

export default React.memo(CardFooter)
