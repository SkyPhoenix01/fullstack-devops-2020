import colorConverter from 'color-convert';
import { TtfHex, TtfRgb } from '../../model/Color';

export function hex2rgb(color: TtfHex): TtfRgb { 
    const colorToConvert: TtfHex = color;
    const convertedColor = colorConverter.hex.rgb(colorToConvert.hex);
    console.log(convertedColor, color);
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
        return json
    };
    
    return convertedColor.reduce(callback, {}) as TtfRgb;
}