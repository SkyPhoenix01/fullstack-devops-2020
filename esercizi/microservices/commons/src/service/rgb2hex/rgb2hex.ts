import colorConverter from 'color-convert';
import { TtfHex, TtfRgb } from '../../model/Color';

export const rgb2hex = (color: TtfRgb): TtfHex => {
    const colorToConvert: TtfRgb = color;
    const colorConverted = colorConverter.rgb.hex(colorToConvert.red, colorToConvert.green, colorToConvert.blue);
    console.log(colorConverted);
    const json = {
        hex: colorConverted
    }
    return json as TtfHex;
}