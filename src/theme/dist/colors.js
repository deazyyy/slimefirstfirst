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
exports.__esModule = true;
exports.darkColors = exports.lightColors = exports.brandColors = exports.baseColors = void 0;
exports.baseColors = {
    failure: "#ED4B9E",
    primary: "#0082f5",
    primaryBright: "#6bb7f9",
    primaryDark: "#6bb7f9",
    secondary: "#3480c2",
    success: "#31D0AA",
    warning: "#FFB237",
    blackhead: "#000101"
};
exports.brandColors = {
    binance: "#F0B90B"
};
exports.lightColors = __assign(__assign(__assign({}, exports.baseColors), exports.brandColors), { background: "#f1f8ff", backgroundDisabled: "#E9EAEB", contrast: "#191326", invertedContrast: "#FFFFFF", input: "#cae7ff", tertiary: "#E0E0E0", text: "#000", textDisabled: "#BDC2C4", textSubtle: "#00000", borderColor: "#E9EAEB", card: "#fcfeff", lgray: "#92939b", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)"
    } });
exports.darkColors = __assign(__assign(__assign({}, exports.baseColors), exports.brandColors), { secondary: "#6bb7f9", background: "#343135", backgroundDisabled: "#3c3742", contrast: "#FFFFFF", invertedContrast: "#191326", input: "#483f5a", primaryDark: "#0098A1", tertiary: "transparent", text: "#FFFFFF", textDisabled: "#666171", textSubtle: "#c9c4d4", lgray: "#92939b", borderColor: "#524B63", card: "#27262c", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)"
    } });
