import { Express } from 'express';
import { TtfHex, TtfCmyk } from '../model/Color';
import { cmyk2hex } from '../service/cmyk2hex/cmyk2hex';

export class HttpController {
    constructor(server: Express) {
        server.get("/", (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfCmyk;
            const convertedColor: TtfHex = cmyk2hex(color);

            res.send(convertedColor);
        });
    }
}

