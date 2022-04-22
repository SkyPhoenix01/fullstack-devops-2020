import { Express } from 'express';
import { TtfHsl, TtfCmyk } from '../model/Color';
import { hsl2cmyk } from '../service/hsl2cmyk/hsl2cmyk';

export class HttpController {
    constructor(server: Express) {
        server.get("/", (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfHsl;
            const convertedColor: TtfCmyk = hsl2cmyk(color);

            res.send(convertedColor);
        });

    }
}

