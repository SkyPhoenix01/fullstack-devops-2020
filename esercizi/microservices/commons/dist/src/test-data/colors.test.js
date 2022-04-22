"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
const colors_1 = require("./colors");
const color_convert_1 = __importDefault(require("color-convert"));
chai_1.default.config.includeStack = true;
// const should = chai.should();
describe('Color Converter rgb2hex', () => {
    colors_1.hex2rgbTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.hexValue)} to ${JSON.stringify(test.rgbValue)}`, () => {
            const converted = color_convert_1.default.hex.rgb(test.hexValue.hex);
            const rgb = {
                red: converted[0],
                green: converted[1],
                blue: converted[2]
            };
            rgb.should.deep.equals(test.rgbValue);
        });
    });
    colors_1.hex2hslTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.hexValue)} to ${JSON.stringify(test.hslValue)}`, () => {
            const converted = color_convert_1.default.hex.hsl(test.hexValue.hex);
            const hsl = {
                hue: converted[0],
                saturation: converted[1],
                lightness: converted[2]
            };
            hsl.should.deep.equals(test.hslValue);
        });
    });
    colors_1.hex2cmykTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.hexValue)} to ${JSON.stringify(test.cmykValue)}`, () => {
            const converted = color_convert_1.default.hex.cmyk(test.hexValue.hex);
            const cmyk = {
                cyan: converted[0],
                magenta: converted[1],
                yellow: converted[2],
                black: converted[3]
            };
            cmyk.should.deep.equals(test.cmykValue);
        });
    });
    colors_1.rgb2hexTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.rgbValue)} to ${JSON.stringify(test.hexValue)}`, () => {
            const toConvert = [
                test.rgbValue.red,
                test.rgbValue.green,
                test.rgbValue.blue
            ];
            color_convert_1.default.rgb.hex(toConvert).should.deep.equals(test.hexValue.hex);
        });
    });
    colors_1.rgb2hslTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.rgbValue)} to ${JSON.stringify(test.hslValue)}`, () => {
            const toConvert = [
                test.rgbValue.red,
                test.rgbValue.green,
                test.rgbValue.blue
            ];
            const converted = color_convert_1.default.rgb.hsl(toConvert);
            const hsl = {
                hue: converted[0],
                saturation: converted[1],
                lightness: converted[2]
            };
            hsl.should.deep.equals(test.hslValue);
        });
    });
    colors_1.rgb2cmykTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.rgbValue)} to ${JSON.stringify(test.cmykValue)}`, () => {
            const toConvert = [
                test.rgbValue.red,
                test.rgbValue.green,
                test.rgbValue.blue
            ];
            const converted = color_convert_1.default.rgb.cmyk(toConvert);
            const cmyk = {
                cyan: converted[0],
                magenta: converted[1],
                yellow: converted[2],
                black: converted[3]
            };
            cmyk.should.deep.equals(test.cmykValue);
        });
    });
    colors_1.hsl2hexTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.hslValue)} to ${JSON.stringify(test.hexValue)}`, () => {
            const toConvert = [
                test.hslValue.hue,
                test.hslValue.saturation,
                test.hslValue.lightness
            ];
            color_convert_1.default.hsl.hex(toConvert).should.deep.equals(test.hexValue.hex);
        });
    });
    colors_1.hsl2rgbTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.hslValue)} to ${JSON.stringify(test.hslValue)}`, () => {
            const toConvert = [
                test.hslValue.hue,
                test.hslValue.saturation,
                test.hslValue.lightness
            ];
            const converted = color_convert_1.default.hsl.rgb(toConvert);
            const rgb = {
                red: converted[0],
                green: converted[1],
                blue: converted[2]
            };
            rgb.should.deep.equals(test.rgbValue);
        });
    });
    colors_1.hsl2cmykTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.hslValue)} to ${JSON.stringify(test.cmykValue)}`, () => {
            const toConvert = [
                test.hslValue.hue,
                test.hslValue.saturation,
                test.hslValue.lightness
            ];
            const converted = color_convert_1.default.hsl.cmyk(toConvert);
            const cmyk = {
                cyan: converted[0],
                magenta: converted[1],
                yellow: converted[2],
                black: converted[3]
            };
            cmyk.should.deep.equals(test.cmykValue);
        });
    });
    colors_1.cmyk2hexTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.cmykValue)} to ${JSON.stringify(test.hexValue)}`, () => {
            const toConvert = [
                test.cmykValue.cyan,
                test.cmykValue.magenta,
                test.cmykValue.yellow,
                test.cmykValue.black
            ];
            color_convert_1.default.cmyk.hex(toConvert).should.deep.equals(test.hexValue.hex);
        });
    });
    colors_1.cmyk2rgbTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.cmykValue)} to ${JSON.stringify(test.rgbValue)}`, () => {
            const toConvert = [
                test.cmykValue.cyan,
                test.cmykValue.magenta,
                test.cmykValue.yellow,
                test.cmykValue.black
            ];
            const converted = color_convert_1.default.cmyk.rgb(toConvert);
            const rgb = {
                red: converted[0],
                green: converted[1],
                blue: converted[2]
            };
            rgb.should.deep.equals(test.rgbValue);
        });
    });
    colors_1.cmyk2hslTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.cmykValue)} to ${JSON.stringify(test.hslValue)}`, () => {
            const toConvert = [
                test.cmykValue.cyan,
                test.cmykValue.magenta,
                test.cmykValue.yellow,
                test.cmykValue.black
            ];
            const converted = color_convert_1.default.cmyk.hsl(toConvert);
            const hsl = {
                hue: converted[0],
                saturation: converted[1],
                lightness: converted[2]
            };
            hsl.should.deep.equals(test.hslValue);
        });
    });
});
//# sourceMappingURL=colors.test.js.map