"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var uikit_1 = require("uikit");
var bsc_use_wallet_1 = require("@binance-chain/bsc-use-wallet");
var bignumber_js_1 = require("bignumber.js");
var useI18n_1 = require("hooks/useI18n");
var Hero = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n   \n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 34px;\n  text-align: center;\n\n  ", " {\n    // background-image: url('/images/slime/3.png'), url('/images/slime/3b.png');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"], ["\n  align-items: center;\n   \n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 34px;\n  text-align: center;\n\n  ", " {\n    // background-image: url('/images/slime/3.png'), url('/images/slime/3b.png');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var useFetch = function (uri) {
    var _a = react_1.useState(null), data = _a[0], setData = _a[1];
    // empty array as second argument equivalent to componentDidMount
    react_1.useEffect(function () {
        function fetchData() {
            return __awaiter(this, void 0, void 0, function () {
                var response, json;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, fetch(uri)];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2:
                            json = _a.sent();
                            setData(json.result);
                            return [2 /*return*/];
                    }
                });
            });
        }
        fetchData();
    }, [uri]);
    return data;
};
var refCount = -1;
var refcountDone = false;
var ReferralPanel = function () {
    var account = bsc_use_wallet_1.useWallet().account;
    var codex = useFetch("https://slime.finance/codebyaddress/" + account);
    var accountwithout0x = "";
    if (account != null)
        accountwithout0x = account.substring(2);
    var fulluri = "https://api.bscscan.com//api?module=proxy&action=eth_call&to=0x7Dae0C9386F784d900f68b54572B31c6b13C3572&data=0x3f7b06d8000000000000000000000000" + accountwithout0x + "&apikey=QVQUB79SVKIUPNXGEMXBYVWGFQ7B5C71SH";
    refCount = useFetch(fulluri);
    if (!refCount)
        refCount = 0;
    if (refCount >= 0)
        refcountDone = true;
    var TranslateString = useI18n_1["default"]();
    var bignum = new bignumber_js_1["default"](refCount);
    return (react_1["default"].createElement(uikit_1.Card, null,
        react_1["default"].createElement(Hero, null,
            react_1["default"].createElement(uikit_1.Heading, { size: "lg", mb: "24px", className: "headingcls" }, "Referral"),
            react_1["default"].createElement(uikit_1.Text, { className: "lgraycolor", mb: "6px" }, "Earn 1.5% of your slime friends earnings! use this link to invite friends: "),
            react_1["default"].createElement("a", { href: "https://slime.finance?slime-friend=" + codex },
                react_1["default"].createElement(uikit_1.Text, { style: { textDecoration: "underline" } }, "https://slime.finance?slime-friend=" + codex)))));
};
exports["default"] = ReferralPanel;
var templateObject_1;
