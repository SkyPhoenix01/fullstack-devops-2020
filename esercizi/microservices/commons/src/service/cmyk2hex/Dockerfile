FROM node:alpine
COPY cmyk2hex.ts /app/service/cmyk2hex/cmyk2hex.ts
COPY ./app/package.json ./package.json
COPY ./app/tsconfig.json ./tsconfig.json
COPY ./app/Color.ts ./app/model/Color.ts
COPY ./app/HttpController-cmyk2hex.ts ./app/controller/HttpController.ts
COPY ./app/HttpServer.ts ./app/HttpServer.ts
COPY ./app/server-config.json ./server-config.json
RUN npm install && npm install -g typescript && npm install -g ts-node
ENTRYPOINT [ "ts-node", "/app/HttpServer" ]