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
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var bignumber_js_1 = require("bignumber.js");
var Data_1 = require("components/Data");
var bsc_use_wallet_1 = require("@binance-chain/bsc-use-wallet");
var uikit_1 = require("uikit");
var config_1 = require("config");
var Flex_1 = require("components/layout/Flex");
var Page_1 = require("components/layout/Page");
var Button_1 = require("uikit/components/Button/Button");
var hooks_1 = require("state/hooks");
var useRefresh_1 = require("hooks/useRefresh");
var actions_1 = require("state/actions");
var types_1 = require("config/constants/types");
var useI18n_1 = require("hooks/useI18n");
var FarmCard_1 = require("./components/FarmCard/FarmCard");
var FarmTabButtons_1 = require("./components/FarmTabButtons");
var endval;
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
var Farms = function (farmsProps) {
    var path = react_router_dom_1.useRouteMatch().path;
    var TranslateString = useI18n_1["default"]();
    var farmsLP = hooks_1.useFarms();
    var cakePrice = hooks_1.usePriceCakeBusd();
    var bnbPrice = hooks_1.usePriceBnbBusd();
    var _a = bsc_use_wallet_1.useWallet(), account = _a.account, ethereum = _a.ethereum;
    var tokenMode = farmsProps.tokenMode;
    var referralapi = useFetch('https://slime.finance/getreferrer');
    Data_1["default"].myreferrerdata = referralapi;
    var dispatch = react_redux_1.useDispatch();
    var fastRefresh = useRefresh_1["default"]().fastRefresh;
    react_1.useEffect(function () {
        if (account) {
            dispatch(actions_1.fetchFarmUserDataAsync(account));
        }
    }, [account, dispatch, fastRefresh]);
    var activeFarms = farmsLP.filter(function (farm) { return !!farm.isTokenOnly === !!tokenMode && farm.multiplier !== '0X'; });
    var inactiveFarms = farmsLP.filter(function (farm) { return !!farm.isTokenOnly === !!tokenMode && farm.multiplier === '0X'; });
    // /!\ This function will be removed soon
    // This function compute the APY for each farm and will be replaced when we have a reliable API
    // to retrieve assets prices against USD
    // if fourth argument is empty it means iterate till last
    var farmsList = react_1.useCallback(function (farmsToDisplay, removed, init, end) {
        if (end === 0)
            endval = farmsToDisplay.length;
        else
            endval = end;
        // const cakePriceVsBNB = new BigNumber(farmsLP.find((farm) => farm.pid === CAKE_POOL_PID)?.tokenPriceVsQuote || 0)
        var farmsToDisplayWithAPY = farmsToDisplay.slice(init, endval).map(function (farm) {
            // if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
            //   return farm
            // }
            var cakeRewardPerBlock = new bignumber_js_1["default"](farm.eggPerBlock || 1)
                .times(new bignumber_js_1["default"](farm.poolWeight))
                .div(new bignumber_js_1["default"](10).pow(18));
            var cakeRewardPerYear = cakeRewardPerBlock.times(config_1.BLOCKS_PER_YEAR);
            var apy = cakePrice.times(cakeRewardPerYear);
            var totalValue = new bignumber_js_1["default"](farm.lpTotalInQuoteToken || 0);
            if (farm.quoteTokenSymbol === types_1.QuoteToken.BNB) {
                totalValue = totalValue.times(bnbPrice);
            }
            if (totalValue.comparedTo(0) > 0) {
                apy = apy.div(totalValue);
            }
            return __assign(__assign({}, farm), { apy: apy });
        });
        return farmsToDisplayWithAPY.map(function (farm) { return (react_1["default"].createElement(FarmCard_1["default"], { key: farm.pid, farm: farm, removed: removed, bnbPrice: bnbPrice, cakePrice: cakePrice, ethereum: ethereum, account: account })); });
    }, [bnbPrice, account, cakePrice, ethereum]);
    return (react_1["default"].createElement(Page_1["default"], { className: "farmpage" },
        react_1["default"].createElement(uikit_1.Heading, { as: "h1", size: "lg", mb: "20px", className: "text", style: { textAlign: 'center' } }, tokenMode
            ? TranslateString(10002, 'Stake tokens to earn slime')
            : TranslateString(320, 'Stake LP tokens to earn slime')),
        react_1["default"].createElement(uikit_1.Heading, { as: "h2", className: "lgraycolor", mb: "50px", style: { textAlign: 'center', fontWeight: 500, fontSize: "18px" } }, TranslateString(10000, 'Deposit Fee will be used to buyback slime')),
        react_1["default"].createElement(FarmTabButtons_1["default"], null),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("h3", { className: "farminheading" }, "Slime Swap"),
            react_1["default"].createElement(Flex_1["default"], null,
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "" + path },
                    react_1["default"].createElement("div", { className: "farmslimeheaderbxouter" },
                        react_1["default"].createElement("div", { className: "farmslimeheaderbx" },
                            react_1["default"].createElement("img", { src: "images/slime/navw.png", alt: "navimg", className: "navlogo" }),
                            react_1["default"].createElement(Button_1["default"], null, "Farming"))),
                    farmsList(activeFarms, false, 0, 3))),
            react_1["default"].createElement("h3", { className: "farminheading farminheadingpan mt-5" }, "Pancake Swap"),
            react_1["default"].createElement(Flex_1["default"], null,
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "" + path },
                    react_1["default"].createElement("div", { className: "farmslimeheaderbxouter pancakebxouter" },
                        react_1["default"].createElement("div", { className: "farmslimeheaderbx" },
                            react_1["default"].createElement("img", { src: "images/slime/pancake.jpg", alt: "navimg", className: "navlogo" }),
                            react_1["default"].createElement(Button_1["default"], null, "Farming"))),
                    farmsList(activeFarms, false, 3, 0))),
            react_1["default"].createElement(Flex_1["default"], null,
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: path + "/history" }, farmsList(inactiveFarms, true, 0, 0)))),
        react_1["default"].createElement(uikit_1.Image, { src: "/images/slime/8.png", alt: "illustration", width: 1352, height: 587, responsive: true })));
};
exports["default"] = Farms;
