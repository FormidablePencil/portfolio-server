"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const retrieveData_1 = require("./routes/retrieveData");
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const port = process.env.PORT || 8000;
app.use(cors_1.default());
app.use('/demo', retrieveData_1.retrieveWholeProjectCollection, retrieveData_1.retrieveWhileTechCollection);
app.use('/', retrieveData_1.retriveAllOfProjectAndTechCollections);
app.listen(port, () => console.log(`server started at http://localhost:${port}`));
mongoose_1.default.connect(process.env.MONGO_URI, {
    useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true
}, () => console.log('connected to db'));
mongoose_1.default.connection
    .once('open', () => console.log('connection successful'))
    .on('error', (error) => console.log(error, 'connection successful'));
// npm installings > typescript & nodemon (tsConfig, nodemonConfig) > mongoose & dotenv for connecting to the server
//# sourceMappingURL=server.js.map