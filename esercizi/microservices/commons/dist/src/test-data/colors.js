"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmyk2hslTestData = exports.cmyk2rgbTestData = exports.cmyk2hexTestData = exports.hsl2cmykTestData = exports.hsl2rgbTestData = exports.hsl2hexTestData = exports.rgb2cmykTestData = exports.rgb2hslTestData = exports.rgb2hexTestData = exports.hex2cmykTestData = exports.hex2hslTestData = exports.hex2rgbTestData = void 0;
exports.hex2rgbTestData = [
    { rgbValue: { red: 255, green: 0, blue: 0 }, hexValue: { hex: 'FF0000' } },
    { rgbValue: { red: 255, green: 191, blue: 0 }, hexValue: { hex: 'FFBF00' } },
    { rgbValue: { red: 128, green: 255, blue: 0 }, hexValue: { hex: '80FF00' } },
    { rgbValue: { red: 0, green: 255, blue: 64 }, hexValue: { hex: '00FF40' } },
    { rgbValue: { red: 0, green: 255, blue: 255 }, hexValue: { hex: '00FFFF' } },
    { rgbValue: { red: 0, green: 64, blue: 255 }, hexValue: { hex: '0040FF' } },
    { rgbValue: { red: 128, green: 0, blue: 255 }, hexValue: { hex: '8000FF' } },
    { rgbValue: { red: 255, green: 0, blue: 191 }, hexValue: { hex: 'FF00BF' } },
    { rgbValue: { red: 255, green: 0, blue: 64 }, hexValue: { hex: 'FF0040' } }
];
exports.hex2hslTestData = [
    { hslValue: { hue: 0, saturation: 100, lightness: 50 }, hexValue: { hex: 'FF0000' } },
    { hslValue: { hue: 45, saturation: 100, lightness: 50 }, hexValue: { hex: 'FFBF00' } },
    { hslValue: { hue: 90, saturation: 100, lightness: 50 }, hexValue: { hex: '80FF00' } },
    { hslValue: { hue: 135, saturation: 100, lightness: 50 }, hexValue: { hex: '00FF40' } },
    { hslValue: { hue: 180, saturation: 100, lightness: 50 }, hexValue: { hex: '00FFFF' } },
    { hslValue: { hue: 225, saturation: 100, lightness: 50 }, hexValue: { hex: '0040FF' } },
    { hslValue: { hue: 270, saturation: 100, lightness: 50 }, hexValue: { hex: '8000FF' } },
    { hslValue: { hue: 315, saturation: 100, lightness: 50 }, hexValue: { hex: 'FF00BF' } },
    { hslValue: { hue: 345, saturation: 100, lightness: 50 }, hexValue: { hex: 'FF0040' } }
];
exports.hex2cmykTestData = [
    { hexValue: { hex: 'FF0000' }, cmykValue: { cyan: 0, magenta: 100, yellow: 100, black: 0 } },
    { hexValue: { hex: 'FFBF00' }, cmykValue: { cyan: 0, magenta: 25, yellow: 100, black: 0 } },
    { hexValue: { hex: '80FF00' }, cmykValue: { cyan: 50, magenta: 0, yellow: 100, black: 0 } },
    { hexValue: { hex: '00FF40' }, cmykValue: { cyan: 100, magenta: 0, yellow: 75, black: 0 } },
    { hexValue: { hex: '00FFFF' }, cmykValue: { cyan: 100, magenta: 0, yellow: 0, black: 0 } },
    { hexValue: { hex: '0040FF' }, cmykValue: { cyan: 100, magenta: 75, yellow: 0, black: 0 } },
    { hexValue: { hex: '8000FF' }, cmykValue: { cyan: 50, magenta: 100, yellow: 0, black: 0 } },
    { hexValue: { hex: 'FF00BF' }, cmykValue: { cyan: 0, magenta: 100, yellow: 25, black: 0 } },
    { hexValue: { hex: 'FF0040' }, cmykValue: { cyan: 0, magenta: 100, yellow: 75, black: 0 } }
];
exports.rgb2hexTestData = exports.hex2rgbTestData;
exports.rgb2hslTestData = [
    { rgbValue: { red: 255, green: 0, blue: 0 }, hslValue: { hue: 0, saturation: 100, lightness: 50 } },
    { rgbValue: { red: 255, green: 191, blue: 0 }, hslValue: { hue: 45, saturation: 100, lightness: 50 } },
    { rgbValue: { red: 128, green: 255, blue: 0 }, hslValue: { hue: 90, saturation: 100, lightness: 50 } },
    { rgbValue: { red: 0, green: 255, blue: 64 }, hslValue: { hue: 135, saturation: 100, lightness: 50 } },
    { rgbValue: { red: 0, green: 255, blue: 255 }, hslValue: { hue: 180, saturation: 100, lightness: 50 } },
    { rgbValue: { red: 0, green: 64, blue: 255 }, hslValue: { hue: 225, saturation: 100, lightness: 50 } },
    { rgbValue: { red: 128, green: 0, blue: 255 }, hslValue: { hue: 270, saturation: 100, lightness: 50 } },
    { rgbValue: { red: 255, green: 0, blue: 191 }, hslValue: { hue: 315, saturation: 100, lightness: 50 } },
    { rgbValue: { red: 255, green: 0, blue: 64 }, hslValue: { hue: 345, saturation: 100, lightness: 50 } }
];
exports.rgb2cmykTestData = [
    { rgbValue: { red: 255, green: 0, blue: 0 }, cmykValue: { cyan: 0, magenta: 100, yellow: 100, black: 0 } },
    { rgbValue: { red: 255, green: 191, blue: 0 }, cmykValue: { cyan: 0, magenta: 25, yellow: 100, black: 0 } },
    { rgbValue: { red: 128, green: 255, blue: 0 }, cmykValue: { cyan: 50, magenta: 0, yellow: 100, black: 0 } },
    { rgbValue: { red: 0, green: 255, blue: 64 }, cmykValue: { cyan: 100, magenta: 0, yellow: 75, black: 0 } },
    { rgbValue: { red: 0, green: 255, blue: 255 }, cmykValue: { cyan: 100, magenta: 0, yellow: 0, black: 0 } },
    { rgbValue: { red: 0, green: 64, blue: 255 }, cmykValue: { cyan: 100, magenta: 75, yellow: 0, black: 0 } },
    { rgbValue: { red: 128, green: 0, blue: 255 }, cmykValue: { cyan: 50, magenta: 100, yellow: 0, black: 0 } },
    { rgbValue: { red: 255, green: 0, blue: 191 }, cmykValue: { cyan: 0, magenta: 100, yellow: 25, black: 0 } },
    { rgbValue: { red: 255, green: 0, blue: 64 }, cmykValue: { cyan: 0, magenta: 100, yellow: 75, black: 0 } }
];
exports.hsl2hexTestData = [
    { hslValue: { hue: 0, saturation: 100, lightness: 50 }, hexValue: { hex: 'FF0000' } },
    { hslValue: { hue: 45, saturation: 100, lightness: 50 }, hexValue: { hex: 'FFBF00' } },
    { hslValue: { hue: 90, saturation: 100, lightness: 50 }, hexValue: { hex: '80FF00' } },
    { hslValue: { hue: 135, saturation: 100, lightness: 50 }, hexValue: { hex: '00FF40' } },
    { hslValue: { hue: 180, saturation: 100, lightness: 50 }, hexValue: { hex: '00FFFF' } },
    { hslValue: { hue: 225, saturation: 100, lightness: 50 }, hexValue: { hex: '0040FF' } },
    { hslValue: { hue: 270, saturation: 100, lightness: 50 }, hexValue: { hex: '7F00FF' } },
    { hslValue: { hue: 315, saturation: 100, lightness: 50 }, hexValue: { hex: 'FF00BF' } },
    { hslValue: { hue: 345, saturation: 100, lightness: 50 }, hexValue: { hex: 'FF0040' } }
];
exports.hsl2rgbTestData = [
    { rgbValue: { red: 255, green: 0, blue: 0 }, hslValue: { hue: 0, saturation: 100, lightness: 50 } },
    { rgbValue: { red: 255, green: 191, blue: 0 }, hslValue: { hue: 45, saturation: 100, lightness: 50 } },
    { rgbValue: { red: 128, green: 255, blue: 0 }, hslValue: { hue: 90, saturation: 100, lightness: 50 } },
    { rgbValue: { red: 0, green: 255, blue: 64 }, hslValue: { hue: 135, saturation: 100, lightness: 50 } },
    { rgbValue: { red: 0, green: 255, blue: 255 }, hslValue: { hue: 180, saturation: 100, lightness: 50 } },
    { rgbValue: { red: 0, green: 64, blue: 255 }, hslValue: { hue: 225, saturation: 100, lightness: 50 } },
    { rgbValue: { red: 127, green: 0, blue: 255 }, hslValue: { hue: 270, saturation: 100, lightness: 50 } },
    { rgbValue: { red: 255, green: 0, blue: 191 }, hslValue: { hue: 315, saturation: 100, lightness: 50 } },
    { rgbValue: { red: 255, green: 0, blue: 64 }, hslValue: { hue: 345, saturation: 100, lightness: 50 } }
];
exports.hsl2cmykTestData = [
    { hslValue: { hue: 0, saturation: 100, lightness: 50 }, cmykValue: { cyan: 0, magenta: 100, yellow: 100, black: 0 } },
    { hslValue: { hue: 45, saturation: 100, lightness: 50 }, cmykValue: { cyan: 0, magenta: 25, yellow: 100, black: 0 } },
    { hslValue: { hue: 90, saturation: 100, lightness: 50 }, cmykValue: { cyan: 50, magenta: 0, yellow: 100, black: 0 } },
    { hslValue: { hue: 135, saturation: 100, lightness: 50 }, cmykValue: { cyan: 100, magenta: 0, yellow: 75, black: 0 } },
    { hslValue: { hue: 180, saturation: 100, lightness: 50 }, cmykValue: { cyan: 100, magenta: 0, yellow: 0, black: 0 } },
    { hslValue: { hue: 225, saturation: 100, lightness: 50 }, cmykValue: { cyan: 100, magenta: 75, yellow: 0, black: 0 } },
    { hslValue: { hue: 270, saturation: 100, lightness: 50 }, cmykValue: { cyan: 50, magenta: 100, yellow: 0, black: 0 } },
    { hslValue: { hue: 315, saturation: 100, lightness: 50 }, cmykValue: { cyan: 0, magenta: 100, yellow: 25, black: 0 } },
    { hslValue: { hue: 345, saturation: 100, lightness: 50 }, cmykValue: { cyan: 0, magenta: 100, yellow: 75, black: 0 } }
];
exports.cmyk2hexTestData = exports.hex2cmykTestData;
exports.cmyk2rgbTestData = exports.rgb2cmykTestData;
exports.cmyk2hslTestData = exports.hsl2cmykTestData;
//# sourceMappingURL=colors.js.map