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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByLogin = exports.deleteUser = exports.update = exports.save = exports.getById = exports.getAll = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("../../entities/User");
var tasksService = __importStar(require("../tasks/task.service"));
var getAll = function () { return __awaiter(void 0, void 0, void 0, function () {
    var userRepository, allUsers;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(User_1.UserDB)];
            case 1:
                userRepository = _a.sent();
                return [4 /*yield*/, userRepository.find({ where: {} })];
            case 2:
                allUsers = _a.sent();
                return [2 /*return*/, allUsers];
        }
    });
}); };
exports.getAll = getAll;
var getById = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var userRepository, findUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(User_1.UserDB)];
            case 1:
                userRepository = _a.sent();
                return [4 /*yield*/, userRepository.findOne(id)];
            case 2:
                findUser = _a.sent();
                return [2 /*return*/, findUser !== null && findUser !== void 0 ? findUser : null];
        }
    });
}); };
exports.getById = getById;
var save = function (name, login, password) { return __awaiter(void 0, void 0, void 0, function () {
    var userRepository, newUser, savedUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(User_1.UserDB)];
            case 1:
                userRepository = _a.sent();
                return [4 /*yield*/, userRepository.create({ name: name, login: login, password: password })];
            case 2:
                newUser = _a.sent();
                return [4 /*yield*/, userRepository.save(newUser)];
            case 3:
                savedUser = _a.sent();
                return [2 /*return*/, savedUser];
        }
    });
}); };
exports.save = save;
var update = function (id, name, login, password) { return __awaiter(void 0, void 0, void 0, function () {
    var userRepository, findUser, updatedUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(User_1.UserDB)];
            case 1:
                userRepository = _a.sent();
                return [4 /*yield*/, userRepository.findOne(id)];
            case 2:
                findUser = _a.sent();
                if (findUser === undefined)
                    return [2 /*return*/, null];
                return [4 /*yield*/, userRepository.update(id, { name: name, login: login, password: password })];
            case 3:
                updatedUser = _a.sent();
                return [2 /*return*/, updatedUser.raw];
        }
    });
}); };
exports.update = update;
var deleteUser = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var userRepository, deletedUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(User_1.UserDB)];
            case 1:
                userRepository = _a.sent();
                return [4 /*yield*/, tasksService.resetID(id)];
            case 2:
                _a.sent();
                return [4 /*yield*/, userRepository.delete(id)];
            case 3:
                deletedUser = _a.sent();
                if (deletedUser.affected) {
                    return [2 /*return*/, true];
                }
                return [2 /*return*/, false];
        }
    });
}); };
exports.deleteUser = deleteUser;
var getUserByLogin = function (login) { return __awaiter(void 0, void 0, void 0, function () {
    var userRepository, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(User_1.UserDB)];
            case 1:
                userRepository = _a.sent();
                return [4 /*yield*/, userRepository.findOne({ login: login })];
            case 2:
                user = _a.sent();
                return [2 /*return*/, user !== null && user !== void 0 ? user : null];
        }
    });
}); };
exports.getUserByLogin = getUserByLogin;
