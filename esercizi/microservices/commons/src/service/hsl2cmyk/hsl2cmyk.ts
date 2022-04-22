import colorConverter from 'color-convert';
import { TtfHsl, TtfCmyk } from '../../model/Color';

export const hsl2cmyk = (color: TtfHsl): TtfCmyk => { 
    const colorToConvert: TtfHsl = color;
    const colorConverted = colorConverter.hsl.cmyk([colorToConvert.hue, colorToConvert.saturation, colorToConvert.lightness]);
    const callback = (json: any, value: any, index: any) => {
        if (index == 0) {
            json.cyan = value;
        }
        if (index == 1) { 
            json.magenta = value;
        }
        if (index == 2) {
            json.yellow = value;
        }
        if (index == 3) {
            json.key = value;
        }
        return json;
    };

    return colorConverted.reduce(callback, {}) as TtfCmyk;
}