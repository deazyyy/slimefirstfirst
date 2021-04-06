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
var Card_1 = require("./Card");
var CardTitle_1 = require("./CardTitle");
var Balance = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 34px;\n  font-weight: 500;\n"], ["\n  color: ", ";\n  font-size: 34px;\n  font-weight: 500;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var Label = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 14px;\n  margin-bottom: 16px;\n"], ["\n  color: ", ";\n  font-size: 14px;\n  margin-bottom: 16px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var DetailPlaceholder = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  font-size: 14px;\n"], ["\n  display: flex;\n  font-size: 14px;\n"])));
var Value = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 14px;\n"], ["\n  color: ", ";\n  font-size: 14px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var Footer = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  padding: 24px;\n"], ["\n  border-top: 1px solid ", ";\n  padding: 24px;\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.isDark ? '#524B63' : '#E9EAEB');
});
var Coming = function () {
    var TranslateString = useI18n_1["default"]();
    return (react_1["default"].createElement(Card_1["default"], { className: "comingproject" },
        react_1["default"].createElement("div", { style: { padding: '24px', position: "relative", top: "50%", transform: "translateY(-50%)" } },
            react_1["default"].createElement(uikit_1.Image, { src: "/images/slime/bgcrc.png", width: 64, height: 64, mx: "auto", mb: "20px", alt: "Your project here" }),
            react_1["default"].createElement(CardTitle_1["default"], { style: { textAlign: 'center', marginBottom: 0 } }, "Your Project?"),
            react_1["default"].createElement(uikit_1.Button, { variant: "disabled", as: "a", href: "https://t.me/slimefinance", external: true, fullWidth: true, my: "20px", disabled: true }, TranslateString(418, 'Apply Now')),
            react_1["default"].createElement(Label, { className: "lgraycolor", style: { textAlign: 'center' } }, TranslateString(416, 'Create a pool for your token')))));
};
exports["default"] = Coming;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
