import { createGlobalStyle } from "styled-components";

const ResetCSS = createGlobalStyle`
  /* prettier-ignore */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    font-family: 'Gilroy', sans-serif;
    font-weight:600;
  }
  h1{
    font-weight:700 !important;
  }
  h2{
    font-weight:600 !important;
  }
  /* HTML5 display-role reset for older browsers */
  /* prettier-ignore */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font-size: 16px;
    background:${({ theme }) => theme.colors.background} !important;
  }
  ol,
  ul {
    list-style: disc;
    list-style-position: inside;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  [role="button"] {
    cursor: pointer;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    font-family: 'Kanit', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.textSubtle}; 
    border-radius: 8px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${({ theme }) => theme.colors.input}; 
    border-radius: 10px;
  }
  th, td {
    color: ${({ theme }) => theme.colors.text};
    padding: 6px;
  }
  .farm-block{
    display:flex;
    align-items:center;
    justify-content:space-between
  }
  .farm-block-lbl{
    font-size:16px !important;
    color: ${({ theme }) => theme.colors.textSubtle}; !important;
  }
  .farmlabelspan{
    font-size:14px !important;
  }
  .text{
    color: ${({ theme }) => theme.colors.text}; 
  }
  .headingcls{
    text-align:center
  }
  .statsrow{
    color: #a6a7af;
  }
  .valuelocked{
    text-align:center;
    margin:auto
  }
  .farmcardwrapper{
    flex-direction:column
  }
  .harvest_btn{
    color: #a6a7af;
    background: #e9e9eb;
    font-size: 13px;
    font-weight: 400;
    padding:6px 8px;
    min-width:120px;
    height:38px
  }
  .harvestheading{
    position: absolute;
    right: 24px;
    margin-top: -85px;
    font-weight:500;
    font-size:17px;
    color:${({ theme }) => theme.colors.text}
  }
  .connectBtn button{
    padding:20px 26px;
    border-radius:12px;
    img{
      width:14px;
      margin-right:6px
    }
  }
  .harvestheading+.bdiIun{
    flex-direction:row !important
  }
  .farmtabbtn .iYMSbD{
    background-color: #fff;
    padding:3px;
    color:#000
  }
  .hONXTO{
    position:relative;
    height:auto;
    border-radius:50%
  }
  .lgraycolor{
    color: ${({ theme }) => theme.colors.lgray};
  }
  .homebtmr{
    width:300px;
    position:absolute;
    left:-210px;
    bottom:40px;
    transform:translateY(70%);
    @media (max-width: 1400px) {
     display:none;
    }
  }
  .homebtml{
    width:200px;
    position:absolute;
    right:-160px;
    bottom:40px;
    transform:translateY(70%);
    @media (max-width: 1400px) {
      display:none;
    }
  }
  .homeCardouter{
    display:flex;
    @media (max-width: 768px) {
      flex-direction:column
    }
  }
  .homeCardouter2{
    width:400px;
    margin-left:30px;
    @media (max-width: 768px) {
      width:100%;
      margin-left:0;
      margin-top:30px;
    }
  }
  @media (max-width: 768px) {
    #twitter-widget-0{
      width:calc(100% - 60px) !important;
      display:block;
      margin:auto
    }
  }
  @media (max-width: 600px) {
    #twitter-widget-0{
      width:calc(100% - 0px) !important;
      display:block;
      margin:auto
    }
  }
  .fQGwCH{
    margin-top:5px
  }
  .panelFooter{
    padding:40px 20px;
    background:#000;
    border-radius:16px;
    text-align:center;
    margin:0 26px;
    margin-bottom:18px;
    background:linear-gradient(-210deg,#007afe 0%,#6f5ffe 40%);
    background-position:center center;
  }
  .panelFooter h2{
    color: ${({ theme }) => theme.colors.invertedContrast};
    margin-bottom:20px;
    line-height:22px;
    font-size:20px
  }
  .panelFooter button{
      background:${({ theme }) => theme.colors.invertedContrast};
      color:${({ theme }) => theme.colors.text} !important
  }
  .panelFooter button:hover{
    background:${({ theme }) => theme.colors.invertedContrast} !important;
  }
  .fcardouter{
    padding:14px;
    overflow:hidden;
    border-radius:36px;
    // background:#000;
    margin:0 5px;
    max-width:350px !important
  }
  .comingproject{
    background:transparent !important;
    box-shadow:none;
    border:2px dashed rgba(221,221,229,0.8)
  }
  .cltlWF{
    margin-top:30px !important;
    font-size:24px;
    font-weight:500 !important
  }
  .panelFooter button{
    height:38px;
    border-radius:12px;
    font-size:14px
  }
  .menulinkouter{
    position:relative;
    overflow:hidden
  }
  .menulinkouter:hover{
    background-image:linear-gradient(-210deg, #007afe 0%, #6f5ffe  40%) !important;
    background-size: cover !important;
  }
  .menulinkouter:hover svg{
    fill:#fff
  }
  .navaccordion{
    padding-top:10px;
    padding-bottom:10px
  }
  .navaccordion:first-child{
    margin-top:5px
  }
  .navaccordion:hover{
    background-image:linear-gradient(-210deg, #007afe 0%, #6f5ffe  40%) !important;
    background-size: cover !important;
    border-radius:8px;
   
  }
  
  .poolheadingouter{
    display:flex;
    align-items:center;
    flex-direction: row-reverse;
    justify-content: space-between;
    .gAPgzP{
      font-weight:600;
      font-size:18px
    }
  }
  .ebfToW{
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color:${({ theme }) => theme.colors.primary};
  }
  .ebfToW svg{
    fill: ${({ theme }) => theme.colors.primary}
  }
  // nav img
  .navlogo{
    height: auto;
    display:block;
    margin: 0 auto;
    margin-bottom:10px;
    @media (max-width: 768px) {
      display:none;
    }
  }
  .menutopdesk{
    background: transparent;
    border: 0;
        
    @media (max-width: 768px) {
      background-color: ${({ theme }) => theme.colors.card};
      border-bottom: solid 2px rgba(133,133,133,0.1);
    }
  } 
  .menutopdesk div:first-child {
    opacity:0;
    @media (max-width: 968px) {
      opacity:1;
    }
  }
  .styledpanelcss{
    border-radius:20px;
    margin:20px;
    overflow:hidden;
    @media (max-width: 768px) {
      border-radius:0px;
      margin:0px;
      height :calc( 100% - 0px);
      padding-top:90px;
    }

  }
  // frm card
  .harvestheading{
    @media (max-width: 1200px) {
      margin-top:-156px;
    }
  }
  .hsEivP{
    @media (max-width: 1200px) {
      flex-direction:column !important;
      width:100%;
      .harvestheading{
        margin-top:-30px
      }
      .harvest_btn{
        margin:10px 0;
        width:100%
      }
    }
  }
  .qGOfD{
    @media (max-width: 1200px) {
      flex-direction:column !important;
      width:100%;
      .harvest_btn{
        margin:10px 0;
        width:100%
      }
    }
  }

.btnOuter{
  position:relative;
  overflow:hidden
}
  .btn_shiny:before{
    content: '';
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 1);
    width: 60px;
    height: 100%;
    left: 0px;
    top: 0;
    opacity: 0;
    -webkit-filter: blur(30px);
    filter: blur(30px);
    transform: translateX(-50px) skewX(-15deg);         
}
.btn_shiny:after{
    content: '';
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 1);
    width: 30px;
    height: 100%;
    left: 30px;
    top: 0;
    opacity: 0;
    -webkit-filter: blur(5px);
    filter: blur(5px);
    transform: translateX(-50px) skewX(-15deg);          
}
.btn_shiny:hover:before {
    transform: translateX(300px) skewX(-15deg);
    opacity: 0.6;
    transition: 2s;
}
.btn_shiny:hover:after {
    transform: translateX(300px) skewX(-15deg);
    opacity: 1;
    transition: 2s;
}

.btn_shiny{
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index:0
}
.fcardouter{
  @media (max-width: 640px) {
    max-width:85% !important;
    .btnOuter{
      width:100%;
      margin: 0 0 12px;
    }
  }
}
.farmslimeheaderbxouter{
  padding:10px;
  max-width:300px !important;
  display: flex;
  align-items: center;
  margin: 0;
  @media (max-width: 1158px) {
    max-width:350px  !important;
  }
  @media (max-width: 640px)
  {
    max-width: 85% !important;
  }
}

.farmslimeheaderbx{
  width:100%;
  background:linear-gradient(-210deg,#007afe 0%,#6f5ffe 40%);
  border-radius: 32px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-direction:column;
  padding: 60px 24px;
  margin:0px;
  height: 100%;
  
  button{
    background:${({ theme }) => theme.colors.invertedContrast};
    color:${({ theme }) => theme.colors.text} !important;
    padding-left:50px;
    padding-right:50px;
    &:hover{
      background:${({ theme }) => theme.colors.invertedContrast} !important;
    }
  }
  img{
    width:90%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    @media (max-width: 768px) {
      top: 0%;
      transform: translateY(0%);
      margin-bottom:40px
    }
  }
}
.pancakebxouter{
  padding:14px
  
  
}
.pancakebxouter .farmslimeheaderbx{
  background : #39C9D2 !important
}
.farmpage{
  max-width:1600px
}
.farminheading{
  color:${({ theme }) => theme.colors.text};
  margin: 0 100px 10px;
  @media (max-width: 620px)
  {
    margin:20px  auto;
    max-width: 80%;
}
  }
}
.farminheadingpan{
  margin-top:20px !important
}


`;

export default ResetCSS;
