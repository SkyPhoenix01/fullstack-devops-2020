import colorConverter from 'color-convert';
import { TtfRgb, TtfCmyk } from '../../model/Color';

export const rgb2cmyk = (color: TtfRgb): TtfCmyk => {
    const colorToConvert: TtfRgb = color;
    const colorConverted = colorConverter.rgb.cmyk(colorToConvert.red, colorToConvert.green, colorToConvert.blue);
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
            json.black = value;
        }
        return json;
    }

    return colorConverted.reduce(callback, {}) as TtfCmyk;
}