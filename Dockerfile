FROM node:16.19-buster-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8082

CMD ["node","./dist/server.js"]
