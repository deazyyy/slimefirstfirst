import styled, { keyframes, DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  } 
`;

const LinkLabel = styled.div<{ isPushed: boolean }>`
  color: ${({ isPushed, theme }) => (isPushed ? theme.colors.textSubtle : "transparent")};
  transition: color 0.4s;
  flex-grow: 1;
  font-size:13px
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  // height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? "7px 32px" : "10px 12px")};
  font-size: ${({ secondary }) => (secondary ? "12px" : "12px")};
  background: ${({ isActive, theme }) => (isActive ? `linear-gradient(-210deg, #007afe 0%, #6f5ffe  40%)` : "transparent")};;
  color: ${({ isActive, theme }) => (isActive ?  "#fff" :  theme.colors.lgray)};
  // box-shadow: ${({ isActive, theme }) => (isActive ? `inset 4px 0px 0px ${theme.colors.primary}` : "none")};
  border-radius:12px;
  margin: 0px 26px 6px;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    color: ${({ isActive, theme }) => (isActive ?  "#fff" :  theme.colors.lgray)};
  }

  svg {
    fill:  ${({ isActive, theme }) => (isActive ?  "#fff":  theme.colors.lgray)};;
    width:18px
  }

  &:hover {
    
    color:${({ theme }) => theme.colors.invertedContrast};
    svg {
      fill:  ${({ theme }) => theme.colors.invertedContrast};
    }
    a {
      color:${({ theme }) => theme.colors.invertedContrast};
    }
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    -webkit-background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 200% 100%;
    font-weight: bold;
  }
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

export { MenuEntry, LinkLabel };
