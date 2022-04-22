import { Express } from 'express';
import { TtfHex, TtfRgb } from '../model/Color';
import { hex2rgb } from '../service/hex2rgb/hex2rgb';

export class HttpController {
    constructor(server: Express) {
        server.get("/", (req, res) => {
            const hex: TtfHex = {
                hex: req.query.color as string
            }
            const convertedColor: TtfRgb = hex2rgb(hex);

            res.send(convertedColor);
        });

    }
}

