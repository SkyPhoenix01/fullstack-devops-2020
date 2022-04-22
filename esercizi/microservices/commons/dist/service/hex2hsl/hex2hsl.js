"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hex2hsl = void 0;
const color_convert_1 = __importDefault(require("color-convert"));
function hex2hsl(color) {
    const colorToConvert = color;
    const convertedColor = color_convert_1.default.hex.hsl(colorToConvert.hex);
    console.log(convertedColor);
    const callback = (json, value, index) => {
        json[index] = value;
        return json;
    };
    return convertedColor.reduce(callback, {});
}
exports.hex2hsl = hex2hsl;
//# sourceMappingURL=hex2hsl.js.map