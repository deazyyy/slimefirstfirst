"use strict";
exports.__esModule = true;
exports.shadows = exports.breakpointMap = void 0;
exports.breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080
};
var breakpoints = Object.values(exports.breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries = {
    xs: "@media screen and (min-width: " + exports.breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + exports.breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + exports.breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + exports.breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + exports.breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + exports.breakpointMap.lg + "px)"
};
exports.shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #3480c2, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)"
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    "default": "16px",
    card: "32px",
    circle: "50%"
};
var zIndices = {
    dropdown: 10,
    modal: 100
};
exports["default"] = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries,
    spacing: spacing,
    shadows: exports.shadows,
    radii: radii,
    zIndices: zIndices
};
