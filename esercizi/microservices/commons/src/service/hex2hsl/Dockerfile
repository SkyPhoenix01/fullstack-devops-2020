FROM node:alpine
COPY hex2hsl.ts /app/service/hex2hsl/hex2hsl.ts
COPY ./app/package.json ./package.json
COPY ./app/tsconfig.json ./tsconfig.json
COPY ./app/Color.ts ./app/model/Color.ts
COPY ./app/HttpController-hex2hsl.ts ./app/controller/HttpController.ts
COPY ./app/HttpServer.ts ./app/HttpServer.ts
COPY ./app/server-config.json ./server-config.json
RUN npm install && npm install -g typescript
ENTRYPOINT [ "ts-node", "/app/HttpServer" ]