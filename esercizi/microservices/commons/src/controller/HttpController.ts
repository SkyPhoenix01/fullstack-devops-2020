import { Express } from 'express';
import { TtfHex, TtfRgb, TtfHsl, TtfCmyk } from '../model/Color';
import { hex2rgb } from '../service/hex2rgb/hex2rgb';
import { hex2hsl } from '../service/hex2hsl/hex2hsl';
import { hex2cmyk } from '../service/hex2cmyk/hex2cmyk';
import { rgb2hex } from '../service/rgb2hex/rgb2hex';
import { rgb2hsl } from '../service/rgb2hsl/rgb2hsl';
import { rgb2cmyk } from '../service/rgb2cmyk/rgb2cmyk';
import { hsl2rgb } from '../service/hsl2rgb/hsl2rgb';
import { hsl2hex } from '../service/hsl2hex/hsl2hex';
import { hsl2cmyk } from '../service/hsl2cmyk/hsl2cmyk';
import { cmyk2hex } from '../service/cmyk2hex/cmyk2hex';
import { cmyk2rgb } from '../service/cmyk2rgb/cmyk2rgb';
import { cmyk2hsl } from '../service/cmyk2hsl/cmyk2hsl';

export class HttpController { 
    constructor(server: Express) {
        // HEX to RGB
        server.get("/hex2rgb", (req, res) => {
            const hex: TtfHex = {
                hex: req.query.color as string
            }
            const convertedColor: TtfRgb = hex2rgb(hex);

            res.send(convertedColor);
        });
        // HEX to HSL
        server.get("/hex2hsl", (req, res) => { 
            const color: TtfHex = {
                hex: req.query.color as string
            };
            const convertedColor: TtfHsl = hex2hsl(color);

            res.send(convertedColor);
        });
        // HEX to CMYK
        server.get("/hex2cmyk", (req, res) => {
            const color: TtfHex = {
                hex: req.query.color as string
            };
            const convertedColor: TtfCmyk = hex2cmyk(color);

            res.send(convertedColor);
        });

        // RGB to HEX
        server.get("/rgb2hex", (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfRgb;
           
            const convertedColor: TtfHex = rgb2hex(color);

            res.send(convertedColor);
        });
        // RGB to HSL
        server.get("/rgb2hsl", (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfRgb;
            const convertedColor: TtfHsl = rgb2hsl(color);

            res.send(convertedColor);
        });
        // RGB to CMYK
        server.get("/rgb2cmyk", (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfRgb;
            const convertedColor: TtfCmyk = rgb2cmyk(color);

            res.send(convertedColor);
        });

        // HSL to RGB
        server.get("/hsl2rgb", (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfHsl;
            const convertedColor: TtfRgb = hsl2rgb(color);

            res.send(convertedColor);
        });
        // HSL to HEX
        server.get("/hsl2hex", (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfHsl;
            const convertedColor: TtfHex = hsl2hex(color);

            res.send(convertedColor);
        });
        // HSL to CMYK
        server.get("/hsl2cmyk", (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfHsl;
            const convertedColor: TtfCmyk = hsl2cmyk(color);

            res.send(convertedColor);
        });

        // CMYK to RGB
        server.get("/cmyk2rgb", (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfCmyk;
            const convertedColor: TtfRgb = cmyk2rgb(color);

            res.send(convertedColor);
        });
        // CMYK to HEX
        server.get("/cmyk2hex", (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfCmyk;
            const convertedColor: TtfHex = cmyk2hex(color);

            res.send(convertedColor);
        });
        // CMYK to HSL
        server.get("/cmyk2hsl", (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfCmyk;
            const convertedColor: TtfHsl = cmyk2hsl(color);

            res.send(convertedColor);
        });

    }
}

