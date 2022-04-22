import colorConverter from 'color-convert';
import { TtfHsl, TtfHex } from '../../model/Color';

export const hsl2hex = (color: TtfHsl): TtfHex => {
    const colorToConvert: TtfHsl = color;

    console.log(colorToConvert);
    const colorConverted = colorConverter.hsl.hex([colorToConvert.hue, colorToConvert.saturation, colorToConvert.lightness]);
    console.log(colorConverted);

    const json = {
        hex: colorConverted
    }

    return json as TtfHex;
}