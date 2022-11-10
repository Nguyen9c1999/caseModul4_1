"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const index_Router_1 = require("./src/router/index_Router");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const app = (0, express_1.default)();
app.use((0, express_fileupload_1.default)({
    createParentPath: true
}));
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express_1.default.static('public'));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use('', index_Router_1.index_Router);
app.listen(3000, () => {
    console.log('server is running 3000');
});
//# sourceMappingURL=index.js.map