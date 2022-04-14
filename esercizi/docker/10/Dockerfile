FROM alpine
RUN apk add nodejs
COPY package.json /
COPY server.js /app
EXPOSE 3000
ENTRYPOINT ["node", "/app/server.js"]
