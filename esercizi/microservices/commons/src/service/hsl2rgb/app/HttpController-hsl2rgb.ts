import { Express } from 'express';
import { TtfRgb, TtfHsl } from '../model/Color';
import { hsl2rgb } from '../service/hsl2rgb/hsl2rgb';

export class HttpController {
    constructor(server: Express) {
        server.get("/", (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfHsl;
            const convertedColor: TtfRgb = hsl2rgb(color);

            res.send(convertedColor);
        });

    }
}

