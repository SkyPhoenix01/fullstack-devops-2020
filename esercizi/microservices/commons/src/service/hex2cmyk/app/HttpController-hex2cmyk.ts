import { Express } from 'express';
import { TtfHex, TtfCmyk } from '../model/Color';
import { hex2cmyk } from '../service/hex2cmyk/hex2cmyk';

export class HttpController {
    constructor(server: Express) {
        server.get("/", (req, res) => {
            const color: TtfHex = {
                hex: req.query.color as string
            };
            const convertedColor: TtfCmyk = hex2cmyk(color);

            res.send(convertedColor);
        });

    }
}

