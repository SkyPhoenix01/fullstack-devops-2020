import { Express } from 'express';
import { TtfRgb, TtfCmyk } from '../model/Color';
import { cmyk2rgb } from '../service/cmyk2rgb/cmyk2rgb';

export class HttpController {
    constructor(server: Express) {
        server.get("/", (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfCmyk;
            const convertedColor: TtfRgb = cmyk2rgb(color);

            res.send(convertedColor);
        });
    }
}

