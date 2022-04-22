import { Express } from 'express';
import { TtfHex, TtfRgb } from '../model/Color';
import { rgb2hex } from '../service/rgb2hex/rgb2hex';

export class HttpController {
    constructor(server: Express) {
        server.get("/", (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfRgb;

            const convertedColor: TtfHex = rgb2hex(color);

            res.send(convertedColor);
        });
    }
}

