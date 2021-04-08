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
var bignumber_js_1 = require("bignumber.js");
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var uikit_1 = require("uikit");
var bsc_use_wallet_1 = require("@binance-chain/bsc-use-wallet");
var UnlockButton_1 = require("components/UnlockButton");
var Label_1 = require("components/Label");
var useContract_1 = require("hooks/useContract");
var useApprove_1 = require("hooks/useApprove");
var useI18n_1 = require("hooks/useI18n");
var useStake_1 = require("hooks/useStake");
var useUnstake_1 = require("hooks/useUnstake");
var useBlock_1 = require("hooks/useBlock");
var formatBalance_1 = require("utils/formatBalance");
var useHarvest_1 = require("hooks/useHarvest");
var CustomBalance_1 = require("components/CustomBalance");
var Balance_1 = require("components/Balance");
var types_1 = require("config/constants/types");
var DepositModal_1 = require("./DepositModal");
var WithdrawModal_1 = require("./WithdrawModal");
var CompoundModal_1 = require("./CompoundModal");
var CardTitle_1 = require("./CardTitle");
var Card_1 = require("./Card");
var OldSyrupTitle_1 = require("./OldSyrupTitle");
var HarvestButton_1 = require("./HarvestButton");
var CardFooter_1 = require("./CardFooter");
var PoolCard = function (_a) {
    var pool = _a.pool;
    var sousId = pool.sousId, image = pool.image, tokenName = pool.tokenName, stakingTokenName = pool.stakingTokenName, stakingTokenAddress = pool.stakingTokenAddress, projectLink = pool.projectLink, harvest = pool.harvest, apy = pool.apy, tokenDecimals = pool.tokenDecimals, poolCategory = pool.poolCategory, totalStaked = pool.totalStaked, startBlock = pool.startBlock, endBlock = pool.endBlock, isFinished = pool.isFinished, userData = pool.userData, stakingLimit = pool.stakingLimit;
    // Pools using native BNB behave differently than pools using a token
    var isBnbPool = poolCategory === types_1.PoolCategory.BINANCE;
    var TranslateString = useI18n_1["default"]();
    var stakingTokenContract = useContract_1.useERC20(stakingTokenAddress);
    var account = bsc_use_wallet_1.useWallet().account;
    var block = useBlock_1["default"]();
    var onApprove = useApprove_1.useSousApprove(stakingTokenContract, sousId).onApprove;
    var onStake = useStake_1.useSousStake(sousId, isBnbPool).onStake;
    var onUnstake = useUnstake_1.useSousUnstake(sousId).onUnstake;
    var onReward = useHarvest_1.useSousHarvest(sousId, isBnbPool).onReward;
    var _b = react_1.useState(false), requestedApproval = _b[0], setRequestedApproval = _b[1];
    var _c = react_1.useState(false), pendingTx = _c[0], setPendingTx = _c[1];
    var allowance = new bignumber_js_1["default"]((userData === null || userData === void 0 ? void 0 : userData.allowance) || 0);
    var stakingTokenBalance = new bignumber_js_1["default"]((userData === null || userData === void 0 ? void 0 : userData.stakingTokenBalance) || 0);
    var stakedBalance = new bignumber_js_1["default"]((userData === null || userData === void 0 ? void 0 : userData.stakedBalance) || 0);
    var earnings = new bignumber_js_1["default"]((userData === null || userData === void 0 ? void 0 : userData.pendingReward) || 0);
    var blocksUntilStart = Math.max(startBlock - block, 0);
    var blocksRemaining = Math.max(endBlock - block, 0);
    var isOldSyrup = stakingTokenName === types_1.QuoteToken.SYRUP;
    var accountHasStakedBalance = (stakedBalance === null || stakedBalance === void 0 ? void 0 : stakedBalance.toNumber()) > 0;
    var needsApproval = !accountHasStakedBalance && !allowance.toNumber() && !isBnbPool;
    var isCardActive = isFinished && accountHasStakedBalance;
    var withfee = pool.withwithdrawFee;
    var feerate = pool.withdrawFee;
    var poolearningslimeround = 0;
    if (pool.slimeRounding > 0) {
        poolearningslimeround = (Math.round(earnings.toNumber() / 1e18 * (Math.pow(10, pool.slimeRounding))) / (Math.pow(10, pool.slimeRounding)));
    }
    var convertedLimit = new bignumber_js_1["default"](stakingLimit).multipliedBy(new bignumber_js_1["default"](10).pow(tokenDecimals));
    var onPresentDeposit = uikit_1.useModal(react_1["default"].createElement(DepositModal_1["default"], { max: stakingLimit && stakingTokenBalance.isGreaterThan(convertedLimit) ? convertedLimit : stakingTokenBalance, onConfirm: onStake, tokenName: stakingLimit ? stakingTokenName + " (" + stakingLimit + " max)" : stakingTokenName }))[0];
    var onPresentCompound = uikit_1.useModal(react_1["default"].createElement(CompoundModal_1["default"], { earnings: earnings, onConfirm: onStake, tokenName: stakingTokenName }))[0];
    var onPresentWithdraw = uikit_1.useModal(react_1["default"].createElement(WithdrawModal_1["default"], { max: stakedBalance, onConfirm: onUnstake, tokenName: stakingTokenName }))[0];
    var handleApprove = react_1.useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var txHash, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    setRequestedApproval(true);
                    return [4 /*yield*/, onApprove()
                        // user rejected tx or didn't go thru
                    ];
                case 1:
                    txHash = _a.sent();
                    // user rejected tx or didn't go thru
                    if (!txHash) {
                        setRequestedApproval(false);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    console.error(e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }, [onApprove, setRequestedApproval]);
    return (react_1["default"].createElement(Card_1["default"], { isActive: isCardActive, isFinished: isFinished && sousId !== 0 },
        isFinished && sousId !== 0 && react_1["default"].createElement(PoolFinishedSash, null),
        react_1["default"].createElement("div", { style: { padding: '24px' } },
            react_1["default"].createElement("div", { style: { marginBottom: '8px', display: 'flex', alignItems: 'center', flexDirection: "column" } },
                react_1["default"].createElement("div", { style: { flex: 1 } },
                    react_1["default"].createElement(uikit_1.Image, { src: "/images/tokens/" + (image || tokenName) + ".png", width: 64, height: 64, alt: tokenName, mb: "10px" })),
                react_1["default"].createElement(CardTitle_1["default"], { isFinished: isFinished && sousId !== 0, color: "#fff" },
                    isOldSyrup && '[OLD]',
                    " ",
                    tokenName),
                account && harvest && !isOldSyrup && (react_1["default"].createElement(HarvestButton_1["default"], { disabled: !earnings.toNumber() || pendingTx, text: pendingTx ? 'Collecting' : 'Harvest', onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    setPendingTx(true);
                                    return [4 /*yield*/, onReward()];
                                case 1:
                                    _a.sent();
                                    setPendingTx(false);
                                    return [2 /*return*/];
                            }
                        });
                    }); } }))),
            react_1["default"].createElement("div", { className: "poolheadingouter" },
                !isOldSyrup ? (react_1["default"].createElement(BalanceAndCompound, null,
                    poolearningslimeround > 0 ? (react_1["default"].createElement(CustomBalance_1["default"], { fontSize: "18px", value: poolearningslimeround, decimals: pool.slimeRounding })) : (react_1["default"].createElement(Balance_1["default"], { fontSize: "18px", value: formatBalance_1.getBalanceNumber(earnings, pool.tokenDecimals) })),
                    sousId === 0 && account && harvest && (react_1["default"].createElement(HarvestButton_1["default"], { disabled: !earnings.toNumber() || pendingTx, text: pendingTx ? TranslateString(999, 'Compounding') : TranslateString(999, 'Compound'), onClick: onPresentCompound })))) : (react_1["default"].createElement(OldSyrupTitle_1["default"], { hasBalance: accountHasStakedBalance })),
                react_1["default"].createElement(Label_1["default"], { isFinished: isFinished && sousId !== 0, text: TranslateString(330, tokenName + " earned") })),
            react_1["default"].createElement(StyledCardActions, null,
                !account && react_1["default"].createElement(UnlockButton_1["default"], { style: { width: "100%" } }),
                account &&
                    (needsApproval && !isOldSyrup ? (react_1["default"].createElement("div", { style: { flex: 1 } },
                        react_1["default"].createElement(uikit_1.Button, { disabled: isFinished || requestedApproval, onClick: handleApprove, fullWidth: true }, "Approve " + stakingTokenName))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement(uikit_1.Button, { disabled: stakedBalance.eq(new bignumber_js_1["default"](0)) || pendingTx, onClick: isOldSyrup
                                ? function () { return __awaiter(void 0, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                setPendingTx(true);
                                                return [4 /*yield*/, onUnstake('0')];
                                            case 1:
                                                _a.sent();
                                                setPendingTx(false);
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }
                                : onPresentWithdraw }, "Unstake " + stakingTokenName),
                        react_1["default"].createElement(StyledActionSpacer, null),
                        !isOldSyrup && (react_1["default"].createElement(uikit_1.IconButton, { disabled: isFinished && sousId !== 0, onClick: onPresentDeposit },
                            react_1["default"].createElement(uikit_1.AddIcon, { color: "background" }))))))),
            react_1["default"].createElement(StyledDetails, { style: { fontSize: "16px" }, className: "text" },
                react_1["default"].createElement("div", { style: { flex: 1, fontWeight: 600 }, className: "text" },
                    TranslateString(736, 'Unstake Fee'),
                    ":"),
                !withfee ? ('0%') : (react_1["default"].createElement(Balance_1["default"], { color: "red", fontSize: "14px", isDisabled: isFinished, value: feerate, decimals: 2, unit: "%" }))),
            react_1["default"].createElement(StyledDetails, { style: { fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "space-between" }, className: "text" },
                react_1["default"].createElement("div", { style: { flex: 1, margin: "12px 0", color: "#BDC2C4" } },
                    TranslateString(736, 'APR'),
                    ":"),
                isFinished || isOldSyrup || !apy || (apy === null || apy === void 0 ? void 0 : apy.isNaN()) || !(apy === null || apy === void 0 ? void 0 : apy.isFinite()) ? ('-') : (react_1["default"].createElement(Balance_1["default"], { fontSize: "14px", isDisabled: isFinished, value: apy === null || apy === void 0 ? void 0 : apy.toNumber(), decimals: 2, unit: "%" }))),
            react_1["default"].createElement(StyledDetails, { style: { fontSize: "16px" }, className: "text" },
                react_1["default"].createElement("div", { style: { flex: 1, color: "#BDC2C4" } },
                    react_1["default"].createElement("span", { role: "img", "aria-label": stakingTokenName }, ' '),
                    TranslateString(384, 'Your Stake'),
                    ":"),
                react_1["default"].createElement(Balance_1["default"], { color: "#000", fontSize: "14px", isDisabled: isFinished, value: formatBalance_1.getBalanceNumber(stakedBalance) }))),
        react_1["default"].createElement(CardFooter_1["default"], { projectLink: projectLink, totalStaked: totalStaked, blocksRemaining: blocksRemaining, isFinished: isFinished, blocksUntilStart: blocksUntilStart, poolCategory: poolCategory })));
};
var PoolFinishedSash = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-image: url('/images/pool-finished-sash.svg');\n  background-position: top right;\n  background-repeat: not-repeat;\n  height: 135px;\n  position: absolute;\n  right: -24px;\n  top: -24px;\n  width: 135px;\n"], ["\n  background-image: url('/images/pool-finished-sash.svg');\n  background-position: top right;\n  background-repeat: not-repeat;\n  height: 135px;\n  position: absolute;\n  right: -24px;\n  top: -24px;\n  width: 135px;\n"])));
var StyledCardActions = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  margin: 16px 0;\n  width: 100%;\n  box-sizing: border-box;\n"], ["\n  display: flex;\n  justify-content: center;\n  margin: 16px 0;\n  width: 100%;\n  box-sizing: border-box;\n"])));
var BalanceAndCompound = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n"])));
var StyledActionSpacer = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: ", "px;\n  width: ", "px;\n"], ["\n  height: ", "px;\n  width: ", "px;\n"])), function (props) { return props.theme.spacing[4]; }, function (props) { return props.theme.spacing[4]; });
var StyledDetails = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  font-size: 14px;\n"], ["\n  display: flex;\n  font-size: 14px;\n"])));
exports["default"] = PoolCard;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
