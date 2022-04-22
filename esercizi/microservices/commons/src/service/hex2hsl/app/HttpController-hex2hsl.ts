import { Express } from 'express';
import { TtfHex, TtfHsl } from '../model/Color';
import { hex2hsl } from '../service/hex2hsl/hex2hsl';

export class HttpController {
    constructor(server: Express) {
        server.get("/", (req, res) => {
            const color: TtfHex = {
                hex: req.query.color as string
            };
            const convertedColor: TtfHsl = hex2hsl(color);

            res.send(convertedColor);
        });

    }
}

