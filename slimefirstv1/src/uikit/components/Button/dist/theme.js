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
var _a, _b;
exports.__esModule = true;
exports.dark = exports.light = void 0;
var types_1 = require("./types");
var colors_1 = require("../../../theme/colors");
var PRIMARY = types_1.variants.PRIMARY, SECONDARY = types_1.variants.SECONDARY, TERTIARY = types_1.variants.TERTIARY, TEXT = types_1.variants.TEXT, DANGER = types_1.variants.DANGER, SUBTLE = types_1.variants.SUBTLE, SUCCESS = types_1.variants.SUCCESS, DISABLED = types_1.variants.DISABLED;
exports.light = (_a = {},
    _a[PRIMARY] = {
        background: "linear-gradient(-210deg,#007afe 0%,#6f5ffe 40%)",
        backgroundActive: colors_1.lightColors.primaryDark,
        backgroundHover: colors_1.lightColors.primaryBright,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        color: "#FFFFFF"
    },
    _a[SECONDARY] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: "transparent",
        border: "2px solid " + colors_1.lightColors.primary,
        borderColorHover: colors_1.lightColors.primaryBright,
        boxShadow: "none",
        boxShadowActive: "none",
        color: colors_1.lightColors.primary
    },
    _a[TERTIARY] = {
        background: "transparent !transparent",
        backgroundActive: "transparent",
        backgroundHover: "transparent",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: colors_1.lightColors.text
    },
    _a[TEXT] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: colors_1.lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: colors_1.lightColors.primary
    },
    _a[DANGER] = {
        background: colors_1.lightColors.failure,
        backgroundActive: "#D43285",
        backgroundHover: "#FF65B8",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF"
    },
    _a[SUBTLE] = {
        background: "linear-gradient(-210deg,#007afe 0%,#6f5ffe 40%)",
        backgroundActive: colors_1.lightColors.textSubtle + "D9",
        backgroundHover: colors_1.lightColors.textSubtle + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF"
    },
    _a[SUCCESS] = {
        background: colors_1.lightColors.success,
        backgroundActive: colors_1.lightColors.success + "D9",
        backgroundHover: colors_1.lightColors.success + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF"
    },
    _a[DISABLED] = {
        background: "rgba(221,221,229,1)",
        backgroundActive: colors_1.lightColors.success + "D9",
        backgroundHover: colors_1.lightColors.success + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#9fa0a6"
    },
    _a);
exports.dark = (_b = {},
    _b[PRIMARY] = __assign({}, exports.light.primary),
    _b[SECONDARY] = __assign({}, exports.light.secondary),
    _b[TERTIARY] = __assign(__assign({}, exports.light.tertiary), { background: colors_1.darkColors.tertiary, backgroundActive: colors_1.darkColors.tertiary, backgroundHover: colors_1.darkColors.tertiary, color: colors_1.darkColors.primary }),
    _b[TEXT] = __assign(__assign({}, exports.light.text), { backgroundHover: colors_1.darkColors.tertiary }),
    _b[DANGER] = __assign({}, exports.light.danger),
    _b[SUBTLE] = __assign({}, exports.light.subtle),
    _b[SUCCESS] = __assign({}, exports.light.success),
    _b[DISABLED] = __assign({}, exports.light.disabled),
    _b);
