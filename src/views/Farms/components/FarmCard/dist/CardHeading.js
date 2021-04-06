"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var uikit_1 = require("uikit");
var Tags_1 = require("components/Tags");
var Wrapper = styled_components_1["default"](uikit_1.Flex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"], ["\n  svg {\n    margin-right: 0.25rem;\n  }\n"])));
var MultiplierTag = styled_components_1["default"](uikit_1.Tag)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-left: 4px;\n  background-color: rgba(239,239,239,1);\n  color: #a2a2a2;\n  border:0;\n  padding:7px 12px\n"], ["\n  margin-left: 4px;\n  background-color: rgba(239,239,239,1);\n  color: #a2a2a2;\n  border:0;\n  padding:7px 12px\n"])));
var CardHeading = function (_a) {
    var lpLabel = _a.lpLabel, multiplier = _a.multiplier, risk = _a.risk, farmImage = _a.farmImage, tokenSymbol = _a.tokenSymbol, depositFee = _a.depositFee;
    return (react_1["default"].createElement(Wrapper, { justifyContent: "space-between", alignItems: "center", mb: "12px", className: "farmcardwrapper" },
        react_1["default"].createElement(uikit_1.Image, { src: "/images/farms/" + farmImage + ".png", alt: tokenSymbol, width: 64, height: 64 }),
        react_1["default"].createElement(uikit_1.Flex, { flexDirection: "column", alignItems: "center" },
            react_1["default"].createElement(uikit_1.Heading, { my: "8px", style: { fontSize: "14px" } }, lpLabel),
            react_1["default"].createElement(uikit_1.Flex, { justifyContent: "center" },
                depositFee === 0 ? react_1["default"].createElement(Tags_1.NoFeeTag, null) : null,
                react_1["default"].createElement(MultiplierTag, null, multiplier)))));
};
exports["default"] = CardHeading;
var templateObject_1, templateObject_2;
