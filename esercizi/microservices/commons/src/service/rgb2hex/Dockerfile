FROM node:alpine
COPY ./app/package.json ./package.json
COPY ./app/tsconfig.json ./tsconfig.json
COPY ./app/HttpServer.ts ./app/HttpServer.ts
COPY ./app/HttpController-rgb2hex.ts ./app/controller/HttpController.ts
COPY ./app/Color.ts ./app/model/Color.ts
COPY ./rgb2hex.ts /app/service/rgb2hex/rgb2hex.ts
COPY ./app/server-config.json ./server-config.json
RUN npm install && npm install -g typescript && npm install -g ts-node
ENTRYPOINT [ "ts-node", "/app/HttpServer" ]