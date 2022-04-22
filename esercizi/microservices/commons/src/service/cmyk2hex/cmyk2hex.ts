import colorConverter from 'color-convert';
import { TtfHex, TtfCmyk } from '../../model/Color';

export const cmyk2hex = (color: TtfCmyk): TtfHex => {
    const colorToConvert: TtfCmyk = color;
    const convertedColor = colorConverter.cmyk.hex([colorToConvert.cyan, colorToConvert.magenta, colorToConvert.yellow, colorToConvert.black]);
    const json = {
        hex: convertedColor
    };

    return json as TtfHex;
}
