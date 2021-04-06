"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var uikit_1 = require("uikit");
var useI18n_1 = require("hooks/useI18n");
var hooks_1 = require("../../../state/hooks");
var CardValue_1 = require("./CardValue");
var StyledTotalValueLockedCard = styled_components_1["default"](uikit_1.Card)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"], ["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"])));
var TotalValueLockedCard = function () {
    var TranslateString = useI18n_1["default"]();
    // const data = useGetStats()
    var totalValue = hooks_1.useTotalValue();
    // const tvl = totalValue.toFixed(2);
    return (react_1["default"].createElement(StyledTotalValueLockedCard, null,
        react_1["default"].createElement(uikit_1.CardBody, { className: "valuelocked" },
            react_1["default"].createElement(uikit_1.Heading, { size: "lg", mb: "24px" }, TranslateString(999, 'Total Value Locked (TVL)')),
            react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(CardValue_1["default"], { value: totalValue.toNumber(), prefix: "$", decimals: 2 }),
                react_1["default"].createElement(uikit_1.Text, { className: "lgraycolor" }, TranslateString(999, 'Across all Farms and Pools'))))));
};
exports["default"] = TotalValueLockedCard;
var templateObject_1;
