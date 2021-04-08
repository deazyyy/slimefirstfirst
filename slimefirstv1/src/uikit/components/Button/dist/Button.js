"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var getExternalLinkProps_1 = require("../../util/getExternalLinkProps");
var StyledButton_1 = require("./StyledButton");
var types_1 = require("./types");
var Button = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, external = _a.external, isLoading = _a.isLoading, disabled = _a.disabled, props = __rest(_a, ["startIcon", "endIcon", "children", "external", "isLoading", "disabled"]);
    var internalProps = external ? getExternalLinkProps_1["default"]() : {};
    var isDisabled = isLoading || disabled;
    return (react_1["default"].createElement(StyledButton_1["default"], __assign({}, internalProps, props, { isLoading: isLoading, disabled: isDisabled, className: "btnOuter" }),
        react_1["default"].isValidElement(startIcon) &&
            react_1["default"].cloneElement(startIcon, {
                mr: "0.5rem"
            }),
        children,
        react_1["default"].isValidElement(endIcon) &&
            react_1["default"].cloneElement(endIcon, {
                ml: "0.5rem"
            }),
        react_1["default"].createElement("div", { className: "btn_shiny" })));
};
Button.defaultProps = {
    variant: types_1.variants.PRIMARY,
    size: types_1.sizes.MD,
    external: false,
    isLoading: false,
    disabled: false
};
exports["default"] = Button;
