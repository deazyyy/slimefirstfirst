import {farms as farmsConfig,stakePool} from './farms'

const communityFarms = farmsConfig.filter((farm) => farm.isCommunity).map((farm) => farm.tokenSymbol)

export { farmsConfig, communityFarms ,stakePool}
export { default as poolsConfig } from './pools'
export { default as ifosConfig } from './ifo'
