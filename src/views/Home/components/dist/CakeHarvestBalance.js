"use strict";
exports.__esModule = true;
var react_1 = require("react");
var uikit_1 = require("uikit");
var bsc_use_wallet_1 = require("@binance-chain/bsc-use-wallet");
var formatBalance_1 = require("utils/formatBalance");
var bignumber_js_1 = require("bignumber.js");
var useI18n_1 = require("hooks/useI18n");
var useAllEarnings_1 = require("hooks/useAllEarnings");
var CakeHarvestBalance = function (_a) {
    var slimePrice = _a.slimePrice;
    var TranslateString = useI18n_1["default"]();
    var account = bsc_use_wallet_1.useWallet().account;
    var allEarnings = useAllEarnings_1["default"]();
    var fixedget = formatBalance_1.getBalanceNumber(slimePrice, 0);
    var earningsSum = allEarnings.reduce(function (accum, earning) {
        return accum + new bignumber_js_1["default"](earning).div(new bignumber_js_1["default"](10).pow(18)).toNumber();
    }, 0);
    var allvalue = earningsSum.toFixed(4);
    var allEarningsX = slimePrice.multipliedBy(earningsSum).toFixed(2);
    if (!account) {
        return (react_1["default"].createElement(uikit_1.Text, { color: "textDisabled", style: { lineHeight: '20px' }, className: "farmlabelspan" }, TranslateString(298, 'Locked')));
    }
    return (react_1["default"].createElement(uikit_1.Text, { fontSize: "24px", style: { lineHeight: '20px' } },
        " ", " " + allvalue + " ( " + allEarningsX + " $ )",
        " "));
};
exports["default"] = CakeHarvestBalance;
