"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpController = void 0;
const hex2rgb_1 = require("../service/hex2rgb/hex2rgb");
const hex2hsl_1 = require("../service/hex2hsl/hex2hsl");
class HttpController {
    constructor(server) {
        server.get("/hex2rgb", (req, res) => {
            const color = JSON.parse(req.query.color);
            const convertedColor = (0, hex2rgb_1.hex2rgb)(color);
            res.send(convertedColor);
        });
        server.get("/hex2hsl", (req, res) => {
            const color = JSON.parse(req.query.color);
            const convertedColor = (0, hex2hsl_1.hex2hsl)(color);
            res.send(convertedColor);
        });
    }
}
exports.HttpController = HttpController;
//# sourceMappingURL=HttpController.js.map