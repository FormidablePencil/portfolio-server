"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const techSchema = new mongoose_1.default.Schema({});
const techModel = mongoose_1.default.model('technologie', techSchema);
exports.default = techModel;
//# sourceMappingURL=tech.js.map