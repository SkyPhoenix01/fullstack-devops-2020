import { Express } from 'express';
import { TtfHsl, TtfCmyk } from '../model/Color';
import { cmyk2hsl } from '../service/cmyk2hsl/cmyk2hsl';

export class HttpController {
    constructor(server: Express) {
        server.get("/", (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfCmyk;
            const convertedColor: TtfHsl = cmyk2hsl(color);

            res.send(convertedColor);
        });

    }
}

