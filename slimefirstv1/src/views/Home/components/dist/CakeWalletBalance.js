"use strict";
exports.__esModule = true;
var react_1 = require("react");
var uikit_1 = require("uikit");
var bsc_use_wallet_1 = require("@binance-chain/bsc-use-wallet");
var useTokenBalance_1 = require("hooks/useTokenBalance");
var useI18n_1 = require("hooks/useI18n");
var addressHelpers_1 = require("utils/addressHelpers");
var formatBalance_1 = require("utils/formatBalance");
var CakeWalletBalance = function (_a) {
    var slimePrice = _a.slimePrice;
    var TranslateString = useI18n_1["default"]();
    var cakeBalance = useTokenBalance_1["default"](addressHelpers_1.getCakeAddress());
    var account = bsc_use_wallet_1.useWallet().account;
    if (!account) {
        return (react_1["default"].createElement(uikit_1.Text, { color: "textDisabled", style: { lineHeight: '14px' }, className: "farmlabelspan" }, TranslateString(298, 'Locked')));
    }
    var fixedget = formatBalance_1.getBalanceNumber(cakeBalance, 18).toFixed(4);
    var allEarningsX = slimePrice.multipliedBy(formatBalance_1.getBalanceNumber(cakeBalance, 18)).toFixed(2);
    return (react_1["default"].createElement(uikit_1.Text, { fontSize: "24px", style: { lineHeight: '60px' } },
        " ", " " + fixedget + " ( " + allEarningsX + " $ )",
        " "));
};
exports["default"] = CakeWalletBalance;
