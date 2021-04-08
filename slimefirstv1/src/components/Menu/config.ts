import { MenuEntry } from 'uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://slime.finance/swap-slimeeees#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://slime.finance/swap-slimeeees#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Launch Pools',
    icon: 'IfoIcon', 
    href: '/launch',
  
  },
  {
    label: "Automatic Launchpool Maker (Coming soon)",
    href: "https://docs.slime.finance/roadmap/automatic-launchpool-maker",
    icon: 'SunIcon', 
  },
   
 //  {
//    label: 'Roulette',
  //   icon: 'TicketIcon',
 //    href: '/roulette',
 //  },
  {
    label: 'Referrals',
    icon: 'GroupsIcon',
    href: '/slime-friends',
  },
  {
    label: "Certik Audit (In-Progress) ",
    href: "https://certik.org/projects/slime-finance",
    icon: 'CertikIcon',
    external:true
    
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
   //     {
   //   label: 'Lottery',
   //   icon: 'TicketIcon',
   //    href: '/lotto',
   // },
   // {
  //   label: 'NFT',
   //  icon: 'NftIcon',
   // href: '/nft',
   // },
  {
    label: 'Info',
    icon: 'BlogIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: "Token",
        href: "https://pancakeswap.info/tokens/0x4fcfa6cc8914ab455b5b33df916d90bfe70b6ab1",
        external:true
      },
      {
        label: "Blog",
        href: "https://medium.com/@SlimeFinance",
        external:true
      },
      {
        label: "Docs",
        href: "http://docs.slime.finance/",
        external:true
      },
      {
        label: "Github",
        href: "https://github.com/slime-fi/",
        external:true
      },
      {
        label: "Treasury fund report",
        href: "https://slime.finance/reports/buybacks.html",  external:true
      },
    
      
     
    ],
  },
  {
    label: 'Listings',
    icon: 'InfoIcon',
    items: [
   
      {
        label: "CoinMarketCap",
        href: "https://coinmarketcap.com/currencies/slime-finance/",
        external:true
      },
      {
        label: "CoinGecko",
        href: "https://www.coingecko.com/en/coins/slime-finance",
        external:true
      },
      {
        label: "BSCscan",
        href: "https://bscscan.com/token/0x4fcfa6cc8914ab455b5b33df916d90bfe70b6ab1",
        external:true
      },
      {
        label: "DappRadar",
        href: "https://dappradar.com/binance-smart-chain/defi/slime-finance",
        external:true
      }  
     
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
   
]

export default config



export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/slimefinance",
      },
      {
        label: "Spanish",
        href: "https://t.me/slimefinanceES",
      }, 
      {
        label: "Announcements",
        href: "https://t.me/slimefinanceann",
      },
      // {
      //   label: "Whale Alert",
      //   href: "https://t.me/PancakeSwapWhales",
      // },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/slimefinance",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;