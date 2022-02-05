"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var boardsService = __importStar(require("./board.service"));
var router = (0, express_1.default)();
router.route('/').get(function (_, res) { return __awaiter(void 0, void 0, void 0, function () {
    var boards, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, boardsService.getAll()];
            case 1:
                boards = _b.sent();
                res.status(200).json(boards);
                return [3 /*break*/, 3];
            case 2:
                _a = _b.sent();
                res.status(401).json('Unauthorized');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.route('/:id').get(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var board, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, boardsService.getBoard(req.params.id)];
            case 1:
                board = _b.sent();
                if (board) {
                    res.status(200).json(board);
                }
                else {
                    res.status(404).json('Board not found');
                }
                return [3 /*break*/, 3];
            case 2:
                _a = _b.sent();
                res.status(401).json('Unauthorized');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.route('/').post(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, columns, board, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _a = req.body, title = _a.title, columns = _a.columns;
                return [4 /*yield*/, boardsService.save(title, columns)];
            case 1:
                board = _c.sent();
                if (board) {
                    res.status(201).json(board);
                }
                else {
                    res.status(400).json('Bad request');
                }
                return [3 /*break*/, 3];
            case 2:
                _b = _c.sent();
                res.status(401).json('Unauthorized');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.route('/:id').put(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, columns, board, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _a = req.body, title = _a.title, columns = _a.columns;
                return [4 /*yield*/, boardsService.update(req.params.id, title, columns)];
            case 1:
                board = _c.sent();
                if (board) {
                    res.status(200).json(board);
                }
                else {
                    res.status(400).json('Bad request');
                }
                return [3 /*break*/, 3];
            case 2:
                _b = _c.sent();
                res.status(401).json('Unauthorized');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.route('/:id').delete(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, boardsService.remove(req.params.id)];
            case 1:
                result = _b.sent();
                if (result) {
                    res.status(204).json('The board has been deleted');
                }
                else {
                    res.status(404).json('Board not found');
                }
                return [3 /*break*/, 3];
            case 2:
                _a = _b.sent();
                res.status(401).json('Unauthorized');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
