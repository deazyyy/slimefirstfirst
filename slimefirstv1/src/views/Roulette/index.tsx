import React from 'react'
import styled from 'styled-components'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import { Button, Card, CardBody, Heading, Toggle, Text } from 'uikit'
import Page from 'components/layout/Page'
import Container from 'components/layout/Container'
import { useRouletteContract, useRouletteWssContract } from 'hooks/useContract'
import CardTitle from 'views/Pools/components/CardTitle'
import Input from 'components/Input'

const reduceAddressLength = (stringValue) =>
  stringValue ? `${stringValue.substring(0, 5)}...${stringValue.substring(stringValue.length - 4)}` : ''

const Title = styled(Heading).attrs({ size: 'lg' })`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 16px;
`

const StyledSpacer = styled.div`
  width: ${(props) => props.theme.spacing[3]}px;
`

const WinnerRow = styled.tr`
  background-color: ${({ theme }) => theme.colors.secondary};
`

const StyledTokenAdornmentWrapper = styled.div`
  align-items: center;
  display: flex;
`

const Block = styled.div`
  margin-bottom: 32px;
  width: 50%;
`

const Flex = styled.div`
  display: flex;
`

const Content = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: 1fr minmax(auto, 436px);
  }
`

const Hero = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  * {
    padding: 10px;
  }
  ul {
    margin: 10px;
    padding: 20px;
    list-style-type: none;
    font-size: 16px;
    li {
      margin-bottom: 4px;
    }
  }
`

const useRouletteData = () => { return;
  const [setting, setSetting] = React.useState(null)
  const { account } = useWallet()
  const contract = useRouletteContract()

  const getContractData = React.useCallback(
    async () => ({
      minBet: new BigNumber(await contract.methods.minBet().call()).div(1e18).toString(),
      maxBet: new BigNumber(await contract.methods.maxBet().call()).div(1e18).toString(),
      bonus: new BigNumber(await contract.methods.bonus(account).call()).div(1e6).toString(),
    }),
    [contract, account],
  )

  React.useEffect(() => {
    if (setting) return
    getContractData()
      .then(setSetting)
      .catch(() => setSetting(null))
  }, [getContractData, setting])

  return [setting]
}

const useRouletteListener = () => {
  return;
  const [row, setRow] = React.useState({})
  const wss = useRouletteWssContract()

  React.useEffect(() => {
    wss.events.allEvents(
      {
        fromBlock: 0,
        filter: { event: ['BetLoser', 'WinLoser'] },
      },
      (err, event) => {
        if (err) {
          console.warn(err)
          return
        }
        setRow((x) => ({
          [event.transactionHash]: {
            result: !(event.event === 'BetLoser'),
            tx: event.transactionHash,
            ...event.returnValues,
          },
          ...x,
        }))
      },
    )
  }, [wss, row])

  return [row]
}

const RouletteResults: React.FC = () => {
  const [row] = useRouletteListener()

  return (
    <div>
      {Object.keys(row).length > 0 && (
        <Heading as="h4" size="l">
          Last Winner: <span>{row[Object.keys(row)[0]].winnerNumber}</span>
        </Heading>
      )}
      <table style={{ minWidth: '500px', margin: 25 }}>
        <thead>
          <tr>
            <th scope="col">Player</th>
            <th scope="col">Bet</th>
            <th scope="col">Winner Number</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(row).length === 0 ? (
            <tr>
              <td colSpan={3}>Loading...</td>
            </tr>
          ) : (
            Object.keys(row).map((i) =>
              row[i].result ? (
                <WinnerRow key={i}>
                  <td>{reduceAddressLength(row[i][0])}</td>
                  <td>Winner</td>
                  <td style={{ textAlign: 'center' }}>
                    <a href={`https://bscscan.com/tx/${row[i].tx}`} rel="noreferrer" target="_blank">
                      {row[i].winnerNumber}
                    </a>
                  </td>
                </WinnerRow>
              ) : (
                <tr key={i}>
                  <td>{reduceAddressLength(row[i][0])}</td>
                  <td>Loser</td>
                  <td style={{ textAlign: 'center' }}>
                    <a href={`https://bscscan.com/tx/${row[i].tx}`} rel="noreferrer" target="_blank">
                      {row[i].winnerNumber}
                    </a>
                  </td>
                </tr>
              ),
            )
          )}
        </tbody>
      </table>
    </div>
  )
}

const BetInput: React.FC<any> = ({ setValue }) => {
  const [betNumber, setBetNumber] = React.useState()
  const [setting] = useRouletteData()
  const TranslateString = useI18n()
  const setInput = (v) => {
    setBetNumber(v)
    setValue(v)
  }

  if (!setting) return <div />

  return (
    <Input
      placeholder="Bet"
      type="number"
      value={betNumber}
      onChange={(e) => setInput(e.currentTarget.value)}
      min={setting.minBet}
      max={setting.maxBet}
      endAdornment={
        <StyledTokenAdornmentWrapper>
          <div>
            <Button size="sm" onClick={() => setInput(setting.minBet)}>
              {TranslateString(999, 'Min')}
            </Button>
          </div>
          <StyledSpacer />
          <div>
            <Button size="sm" onClick={() => setInput(setting.maxBet)}>
              {TranslateString(452, 'Max')}
            </Button>
          </div>
        </StyledTokenAdornmentWrapper>
      }
    />
  )
}

const RouletteBets: React.FC = () => {
  return;
  const { account } = useWallet()
  const [setting] = useRouletteData()
  const TranslateString = useI18n()
  const [betNumber, setBetNumber] = React.useState('')
  const [betColor, setBetColor] = React.useState('')
  const [betOdd, setBetOdd] = React.useState('')
  const [number, setNumber] = React.useState(undefined)
  const [odd, setOdd] = React.useState(true)
  const [color, setColor] = React.useState(true)
  const contract = useRouletteContract()

  const playNumber = async () => {
    await contract.methods
      .betNumber(parseInt(number), new BigNumber(betNumber).multipliedBy(1e18))
      .send({ from: account })
  }

  const playColor = async () => {
    await contract.methods.betColor(Boolean(color), new BigNumber(betColor).multipliedBy(1e18)).send({ from: account })
  }

  const playOdd = async () => {
    await contract.methods.betColor(Boolean(odd), new BigNumber(betOdd).multipliedBy(1e18)).send({ from: account })
  }

  if (!setting) return <Text>Loading</Text>

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Bet a Number (10X)</CardTitle>
          <Input
            placeholder="Your Number (0-36)"
            min={0}
            max={36}
            type="number"
            value={number}
            onChange={(e) => setNumber(e.currentTarget.value)}
          />
          <br />
          <BetInput setValue={setBetNumber} />
          <br />
          <Button
            mt="8px"
            fullWidth
            disabled={Number.isNaN(parseInt(betNumber)) || Number.isNaN(parseInt(number))}
            onClick={playNumber}
          >
            {TranslateString(999, 'Play')}
          </Button>
        </CardBody>
      </Card>
      <hr />
      <Card>
        <CardBody>
          <CardTitle>Bet a Color</CardTitle>
          <Text>The Number is Red?</Text>
          <Toggle checked={color} onChange={() => setColor((x) => !x)} />
          <br />
          <br />
          <BetInput setValue={setBetColor} />
          <br />
          <Button mt="8px" fullWidth disabled={Number.isNaN(parseInt(betColor))} onClick={playColor}>
            {TranslateString(999, 'Play')}
          </Button>
        </CardBody>
      </Card>
      <hr />
      <Card>
        <CardBody>
          <CardTitle>Bet Number Is Even</CardTitle>
          <Text>The Number is Even?</Text>
          <Toggle checked={odd} onChange={() => setOdd((x) => !x)} />
          <br />
          <br />
          <BetInput setValue={setBetOdd} />
          <br />
          <Button mt="8px" fullWidth disabled={Number.isNaN(parseInt(betOdd))} onClick={playOdd}>
            {TranslateString(999, 'Play')}
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}

const RouletteStats: React.FC = () => {
  return;
  const [setting] = useRouletteData()

  if (!setting) return <div />

  return (
    <div>
      <Heading as="h4" size="l">
        Min bet: <span>{setting.minBet}</span>
      </Heading>
      <Heading as="h4" size="l">
        Max bet: <span>{setting.maxBet}</span>
      </Heading>
      <Heading as="h4" size="l">
        Bonus multiplier: <span>{setting.bonus}</span>
      </Heading>
    </div>
  )
}

const Roulette: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <div>
          <Heading as="h1" size="xxl" mb="8px">
            Roulette
          </Heading>
          <RouletteStats />
        </div>
        <div>
          <ul>
            <li>
              The Roulette will draw a number using the European Roulette layout (single 0) and you can make a single
              bet each spin.
            </li>
            <li>
              You can bet for a number, a color or if the winner number is odd or even. The number has a 10X multiplier
              and the rest of bets only 1.01X.
            </li>
            <li>A 10% fee is burn in each bet.</li>
            <li>
              A small multiplier bonus is added to your profile after each bet, play more and get a bigger chance to win
              more.
            </li>
          </ul>
        </div>
      </Hero>
      <Content>
        <Flex>
          <Block>
            <Title as="h2">{TranslateString(999, 'Put You Bet')}</Title>
            <RouletteBets />
          </Block>
          <Block>
            <Title as="h2">{TranslateString(999, 'Previous Bets')}</Title>
            <RouletteResults />
          </Block>
        </Flex>
      </Content>
    </Page>
  )
}

export default Roulette
