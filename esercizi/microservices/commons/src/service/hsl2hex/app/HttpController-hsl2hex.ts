import { Express } from 'express';
import { TtfHex, TtfHsl } from '../model/Color';
import { hsl2hex } from '../service/hsl2hex/hsl2hex';

export class HttpController {
    constructor(server: Express) {
        server.get("/", (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfHsl;
            const convertedColor: TtfHex = hsl2hex(color);

            res.send(convertedColor);
        });

    }
}

