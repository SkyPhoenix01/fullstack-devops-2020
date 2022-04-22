import colorConverter from 'color-convert';
import { TtfHex, TtfHsl } from '../../model/Color';

export function hex2hsl(color: TtfHex): TtfHsl {
    const colorToConvert: TtfHex = color;
    const convertedColor = colorConverter.hex.hsl(colorToConvert.hex);
    console.log(convertedColor);

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

    return convertedColor.reduce(callback, {}) as TtfHsl;
}