import colorConverter from 'color-convert';
import { TtfHsl, TtfCmyk } from '../../model/Color';

export const cmyk2hsl = (color: TtfCmyk): TtfHsl => {
    const colorToConvert: TtfCmyk = color;
    const colorConverted = colorConverter.cmyk.hsl([colorToConvert.cyan, colorToConvert.magenta, colorToConvert.yellow, colorToConvert.black]);
    const callback = (json: any, value: any, index: any) => {
        if (index == 0) {
            json.hue = value;
        }
        if (index == 1) {
            json.saturation = value;
        }
        if (index == 2) {
            json.lightness = value;
        }
        return json;
    };

    return colorConverted.reduce(callback, {}) as TtfHsl;
}