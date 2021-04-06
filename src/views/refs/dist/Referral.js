"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var uikit_1 = require("uikit");
var Page_1 = require("components/layout/Page");
var Refinfo_1 = require("./components/Refinfo");
var ReferralTable_1 = require("./components/ReferralTable");
var Hero = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  background-image: url('/images/slime/4.png');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 0px;\n  text-align: center;\n\n  ", " {\n    background-image: url('/images/slime/4.png'), url('/images/slime/4b.png');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"], ["\n  align-items: center;\n  background-image: url('/images/slime/4.png');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 0px;\n  text-align: center;\n\n  ", " {\n    background-image: url('/images/slime/4.png'), url('/images/slime/4b.png');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var Cards = styled_components_1["default"](uikit_1.BaseLayout)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 12;\n    width: 100%;\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 12;\n    }\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 12;\n    }\n  }\n"], ["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 12;\n    width: 100%;\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 12;\n    }\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 12;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var Referral = function () {
    return (react_1["default"].createElement(Page_1["default"], null,
        react_1["default"].createElement(Cards, null,
            react_1["default"].createElement(Refinfo_1["default"], null),
            react_1["default"].createElement(ReferralTable_1["default"], null))));
};
exports["default"] = Referral;
var templateObject_1, templateObject_2;
