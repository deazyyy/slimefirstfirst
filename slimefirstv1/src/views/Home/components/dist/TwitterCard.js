"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var uikit_1 = require("uikit");
var styled_components_1 = require("styled-components");
var react_twitter_widgets_1 = require("react-twitter-widgets");
var useI18n_1 = require("hooks/useI18n");
var StyledTwitterCard = styled_components_1["default"](uikit_1.Card)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-left: auto;\n  margin-right: auto;\n"], ["\n  margin-left: auto;\n  margin-right: auto;\n"])));
var TwitterCard = function () {
    var TranslateString = useI18n_1["default"]();
    return (react_1["default"].createElement(StyledTwitterCard, null,
        react_1["default"].createElement(uikit_1.CardBody, null,
            react_1["default"].createElement(uikit_1.Heading, { size: "lg", mb: "24px", className: "headingcls" }, TranslateString(10003, 'Announcements')),
            react_1["default"].createElement(react_twitter_widgets_1.Timeline, { dataSource: {
                    sourceType: 'profile',
                    screenName: 'SlimeFinance'
                }, options: {
                    height: '300',
                    chrome: "noheader, nofooter,noscrollbar ",
                    width: "400"
                } }))));
};
exports["default"] = TwitterCard;
var templateObject_1;
