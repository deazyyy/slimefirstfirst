"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Label = function (_a) {
    var text = _a.text, _b = _a.isFinished, isFinished = _b === void 0 ? false : _b;
    return (react_1["default"].createElement(StyledLabel, { isFinished: isFinished }, text));
};
var StyledLabel = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 14px;\n"], ["\n  color: ", ";\n  font-size: 14px;\n"])), function (_a) {
    var isFinished = _a.isFinished, theme = _a.theme;
    return theme.colors[isFinished ? 'text' : 'primary'];
});
exports["default"] = Label;
var templateObject_1;
