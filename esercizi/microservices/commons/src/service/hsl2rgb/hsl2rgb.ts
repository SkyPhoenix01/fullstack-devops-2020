import colorConverter from 'color-convert';
import { TtfRgb, TtfHsl } from '../../model/Color';

export const hsl2rgb = (color: TtfHsl): TtfRgb => { 
    const colorToConvert: TtfHsl = color;

    console.log(colorToConvert);
    const colorConverted = colorConverter.hsl.rgb([colorToConvert.hue, colorToConvert.saturation, colorToConvert.lightness]);
    console.log(colorConverted);
 
    const callback = (json: any, value: any, index: any) => {
        if (index == 0) {
            json.red = value;
        }
        if (index == 1) {
            json.green = value;
        }
        if (index == 2) {
            json.blue = value;
        }
        return json;
    }
 
    return colorConverted.reduce(callback, {}) as TtfRgb;
}