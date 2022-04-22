import colorConverter from 'color-convert';
import { TtfRgb, TtfCmyk } from '../../model/Color';

export const cmyk2rgb = (color: TtfCmyk): TtfRgb => {
    const colorToConvert: TtfCmyk = color;
    const convertedColor = colorConverter.cmyk.rgb([colorToConvert.cyan, colorToConvert.magenta, colorToConvert.yellow, colorToConvert.black]);
    const json = {
        red: convertedColor[0],
        green: convertedColor[1],
        blue: convertedColor[2]
    };

    return json as TtfRgb;
}