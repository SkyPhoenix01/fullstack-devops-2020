FROM node:alpine
COPY ./app/package.json ./package.json
COPY ./app/tsconfig.json ./tsconfig.json
COPY ./app/HttpServer.ts ./app/HttpServer.ts
COPY ./app/HttpController-hex2rgb.ts ./app/controller/HttpController.ts
COPY ./app/Color.ts ./app/model/Color.ts
COPY ./hex2rgb.ts /app/service/hex2rgb/hex2rgb.ts
COPY ./app/server-config.json ./server-config.json
RUN npm install && npm install -g typescript
ENTRYPOINT [ "ts-node", "/app/HttpServer" ]