"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.retriveAllOfProjectAndTechCollections = exports.retrieveWhileTechCollection = exports.retrieveWholeProjectCollection = void 0;
const express_1 = __importDefault(require("express"));
const project_1 = __importDefault(require("../model/project"));
const tech_1 = __importDefault(require("../model/tech"));
exports.retrieveWholeProjectCollection = express_1.default.Router();
exports.retrieveWholeProjectCollection.get('/gallery', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projectCollection = yield project_1.default.find();
    if (!projectCollection)
        return res.sendStatus(404);
    res.status(202).send(projectCollection);
}));
exports.retrieveWhileTechCollection = express_1.default.Router();
exports.retrieveWhileTechCollection.get('/tech', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const techCollection = yield tech_1.default.find();
    if (!techCollection)
        return res.sendStatus(404);
    res.status(202).send(techCollection);
}));
exports.retriveAllOfProjectAndTechCollections = express_1.default.Router();
exports.retriveAllOfProjectAndTechCollections.get('/retrieveAllData', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projectCollection = yield project_1.default.find();
    const techCollection = yield tech_1.default.find();
    if (!techCollection || !projectCollection)
        return res.sendStatus(404);
    res.status(202).send({ projectCollection, techCollection });
}));
//# sourceMappingURL=retrieveData.js.map