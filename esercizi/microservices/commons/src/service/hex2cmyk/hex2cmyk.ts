import colorConverter from 'color-convert';
import { TtfHex, TtfCmyk } from '../../model/Color';

export const hex2cmyk = (color: TtfHex): TtfCmyk => { 

    const colorToConvert: TtfHex = color;
    const colorConverted = colorConverter.hex.cmyk(colorToConvert.hex);
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