import BigNumber from 'bignumber.js'

export const getBalanceNumber = (balance: BigNumber, decimals = 18) => {
  const displayBalance = new BigNumber(balance).dividedBy(new BigNumber(10).pow(decimals))
  return displayBalance.toNumber()
}

export const getBalanceNumber2 = (balance: BigNumber, decimals = 18) => {
  const displayBalance = new BigNumber(balance)  
  return displayBalance.toNumber()
}
export const getBalanceBig = (balance: BigNumber, decimals = 18) => {
  const displayBalance = new BigNumber(balance).dividedBy(new BigNumber(10).pow(decimals))
  return displayBalance
}
export const getFullDisplayBalance = (balance: BigNumber, decimals = 18) => {
  return balance.dividedBy(new BigNumber(10).pow(decimals)).toFixed()
}
export const getFullDisplayBalance2 = (balance: BigNumber, decimals = 18) => {
  return balance.toFixed()
}