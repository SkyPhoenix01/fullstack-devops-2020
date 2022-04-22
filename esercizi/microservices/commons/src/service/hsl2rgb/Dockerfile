FROM node:alpine
COPY ./app/package.json ./package.json
COPY ./app/tsconfig.json ./tsconfig.json
COPY ./app/HttpServer.ts ./app/HttpServer.ts
COPY ./app/HttpController-hsl2rgb.ts ./app/controller/HttpController.ts
COPY ./app/Color.ts ./app/model/Color.ts
COPY ./app/server-config.json ./server-config.json
COPY ./hsl2rgb.ts /app/service/hsl2rgb/hsl2rgb.ts
RUN npm install && npm install -g typescript && npm install -g ts-node
ENTRYPOINT [ "ts-node", "/app/HttpServer" ]