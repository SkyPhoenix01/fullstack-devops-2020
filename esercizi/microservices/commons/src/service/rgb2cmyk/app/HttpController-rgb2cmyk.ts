import { Express } from 'express';
import { TtfHex, TtfRgb, TtfHsl, TtfCmyk } from '../model/Color';
import { hex2rgb } from '../service/hex2rgb/hex2rgb';
import { hex2hsl } from '../service/hex2hsl/hex2hsl';
import { hex2cmyk } from '../service/hex2cmyk/hex2cmyk';
import { rgb2hex } from '../service/rgb2hex/rgb2hex';
import { rgb2hsl } from '../service/rgb2hsl/rgb2hsl';
import { rgb2cmyk } from '../service/rgb2cmyk/rgb2cmyk';
import { hsl2rgb } from '../service/hsl2rgb/hsl2rgb';
import { hsl2hex } from '../service/hsl2hex/hsl2hex';
import { hsl2cmyk } from '../service/hsl2cmyk/hsl2cmyk';
import { cmyk2hex } from '../service/cmyk2hex/cmyk2hex';
import { cmyk2rgb } from '../service/cmyk2rgb/cmyk2rgb';
import { cmyk2hsl } from '../service/cmyk2hsl/cmyk2hsl';

export class HttpController {
    constructor(server: Express) {
        server.get("/", (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfRgb;
            const convertedColor: TtfCmyk = rgb2cmyk(color);

            res.send(convertedColor);
        });

    }
}

