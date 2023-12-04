"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const ruter = express_1.default.Router();
ruter.post('/', user_controller_1.userContoller.createUser);
ruter.get('/', user_controller_1.userContoller.getAllUser);
ruter.get('/:userId', user_controller_1.userContoller.getSpecificUser);
ruter.delete('/:userId', user_controller_1.userContoller.deleteSingleUser);
ruter.put('/:userId', user_controller_1.userContoller.updateUser);
exports.default = ruter;
