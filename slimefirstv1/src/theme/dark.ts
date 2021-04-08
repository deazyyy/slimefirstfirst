import { DefaultTheme } from "styled-components";
import { dark as darkAlert } from "../uikit/components/Alert/theme";
import { dark as darkButton } from "../uikit/components/Button/theme";
import { dark as darkCard } from "../uikit/components/Card/theme";
import { dark as darkRadio } from "../uikit/components/Radio/theme";
import { dark as darkToggle } from "../uikit/components/Toggle/theme";
import { dark as darkNav } from "../uikit/widgets/Menu/theme";
import { dark as darkModal } from "../uikit/widgets/Modal/theme";
import base from "./base";
import { darkColors } from "./colors";

const darkTheme: DefaultTheme = {
  ...base,
  isDark: true,
  alert: darkAlert,
  button: darkButton,
  colors: darkColors,
  card: darkCard,
  toggle: darkToggle,
  nav: darkNav,
  modal: darkModal,
  radio: darkRadio,
};

export default darkTheme;
