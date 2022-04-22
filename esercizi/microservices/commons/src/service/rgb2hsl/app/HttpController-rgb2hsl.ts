import { Express } from 'express';
import { TtfRgb, TtfHsl } from '../model/Color';
import { rgb2hsl } from '../service/rgb2hsl/rgb2hsl';

export class HttpController {
    constructor(server: Express) {
        server.get("/", (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfRgb;
            const convertedColor: TtfHsl = rgb2hsl(color);

            res.send(convertedColor);
        });

    }
}

