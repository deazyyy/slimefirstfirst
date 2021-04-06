import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

export const stakePool = {
  pid: 10,
  risk: 5,
  isTokenOnly: true,
  startTime:1614204686,
  lpSymbol: 'Slime',
  lpAddresses: {
    97: '',
    56: '0xfbd0b87f4132e5a14aa85c21476738c0c13fd06c', // Slime-BUSD LP
  },
  tokenSymbol: 'Slime',
  tokenAddresses: {
    97: '',
    56: '0x4fCfA6cC8914ab455B5b33Df916d90BFe70b6AB1',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  
  quoteTokenAdresses: contracts.busd,
};

export const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'Slime-BUSD LP',
    startTime:1614204686,
    lpAddresses: {
      97: '',
      56: '0xfbd0b87f4132e5a14aa85c21476738c0c13fd06c',
    },
    tokenSymbol: 'Slime',
    tokenAddresses: {
      97: '',
      56: '0x4fCfA6cC8914ab455B5b33Df916d90BFe70b6AB1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'Slime-BNB LP',
    startTime:1614204686,
    lpAddresses: {
      97: '',
      56: '0xcb645714520080ef4e65de3254d61356262f0818',
    },
    tokenSymbol: 'Slime',
    tokenAddresses: {
      97: '',
      56: '0x4fCfA6cC8914ab455B5b33Df916d90BFe70b6AB1',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 20,
    risk: 4,
     startTime:1614204686,
    lpSymbol: 'Slime-FLP LP',  
    lpAddresses: {
      97: '',
      56: '0x9c28100ef8c84da241e46568756e36b2dcc08670', // slime-flp
    },
    tokenSymbol: 'Slime',
    ishardlp:true,
    tokenAddresses: {
      97: '',
      56: '0x4fCfA6cC8914ab455B5b33Df916d90BFe70b6AB1', // slime
    },
    quoteTokenSymbol: QuoteToken.FLP,
    quoteTokenAdresses: contracts.flp,
  } ,
  {
    pid: 23,
    risk: 4,
    lpSymbol: 'DOGE-BUSD LP', startTime:1615075271,
    lpAddresses: {
      97: '',
      56: '0x1Efcb446bFa553A2EB2fff99c9F76962be6ECAC3',
    },
    tokenSymbol: 'DOGE',
    tokenAddresses: {
      97: '',
      56: '0xbA2aE424d960c26247Dd6c32edC70B295c744C43',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    startTime:1614204686,
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 1,
    lpSymbol: 'USDT-BUSD LP',  startTime:1614204686,
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 2,   startTime:1614204686,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    risk: 2,   startTime:1614204686,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 6,
    risk: 1,
    lpSymbol: 'DAI-BUSD LP',  startTime:1614204686,
    lpAddresses: {
      97: '',
      56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
 
  {
    pid: 7,
    risk: 3,
    lpSymbol: 'DOT-BNB LP',  startTime:1614204686,
    lpAddresses: {
      97: '',
      56: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 8,
    risk: 4,
    lpSymbol: 'CAKE-BUSD LP', startTime:1614204686,
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 9,
    risk: 4,
    lpSymbol: 'CAKE-BNB LP', startTime:1614204686,
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 21,
    risk: 4,
    lpSymbol: 'ADA-BNB LP', startTime:1614906983,
    lpAddresses: {
      97: '',
      56: '0xBA51D1AB95756ca4eaB8737eCD450cd8F05384cF',
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      97: '',
      56: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  
  {
    pid: 10,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'Slime', startTime:1614204686,
    lpAddresses: {
      97: '',
      56: '0xfbd0b87f4132e5a14aa85c21476738c0c13fd06c', // Slime-BUSD LP
    },
    tokenSymbol: 'Slime',
    tokenAddresses: {
      97: '',
      56: '0x4fCfA6cC8914ab455B5b33Df916d90BFe70b6AB1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 11,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD', startTime:1614204686,
    lpAddresses: {
      97: '',
      56: '0xfbd0b87f4132e5a14aa85c21476738c0c13fd06c', // Slime-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 12,
    risk: 3,
    isTokenOnly: true, startTime:1614204686,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
   
  {
    pid: 24,
    risk: 4,
    lpSymbol: 'DOGE', startTime:1615075271,  isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x1Efcb446bFa553A2EB2fff99c9F76962be6ECAC3', // doge - busd 
    },
    tokenSymbol: 'DOGE',
    tokenDecimals: 8,
    tokenAddresses: {
      97: '',
      56: '0xbA2aE424d960c26247Dd6c32edC70B295c744C43',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    risk: 1,
    isTokenOnly: true, startTime:1614204686,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // USDT-BUSD LP
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 14,
    risk: 2,
    isTokenOnly: true, startTime:1614204686,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 15,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'ETH', startTime:1614204686,
    lpAddresses: {
      97: '',
      56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 16,
    risk: 1,
    isTokenOnly: true, startTime:1614204686,
    lpSymbol: 'DAI',
    lpAddresses: {
      97: '',
      56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc', // DAI-BUSD LP
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  {
    pid: 17,
    risk: 3,
    isTokenOnly: true, startTime:1614204686,
    lpSymbol: 'DOT',
    lpAddresses: {
      97: '',
      56: '0x54c1ec2f543966953f2f7564692606ea7d5a184e', // DOT-BUSD LP
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 18,
    risk: 4,
    isTokenOnly: true, startTime:1614204686,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 19,
    risk: 3,
    isTokenOnly: true, startTime:1614204686,
    lpSymbol: 'vBSWAP',
    lpAddresses: {
      97: '',
      56: '0x8dd39f0a49160cda5ef1e2a2fa7396eec7da8267', // BSCX-BUSD LP
    },
    tokenSymbol: 'vBSWAP',
    tokenAddresses: {
      97: '',
      56: '0x4f0ed527e8a95ecaa132af214dfd41f30b361600',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  } ,
  {
    pid: 22,
    risk: 4,
    lpSymbol: 'ADA', startTime:1614906983,  isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xBA51D1AB95756ca4eaB8737eCD450cd8F05384cF', // ada -bnb 
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      97: '',
      56: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  }
 
]

export default farms
