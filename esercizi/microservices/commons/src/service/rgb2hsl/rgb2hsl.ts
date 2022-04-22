import colorConverter from 'color-convert';
import { TtfRgb, TtfHsl } from '../../model/Color';

export const rgb2hsl = (color: TtfRgb): TtfHsl => {
    const colorToConvert: TtfRgb = color;
    const colorConverted = colorConverter.rgb.hsl(colorToConvert.red, colorToConvert.green, colorToConvert.blue);

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
    }

    return colorConverted.reduce(callback, {}) as TtfHsl;
}
