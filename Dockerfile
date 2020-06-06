FROM node:current-slim

WORKDIR /usr/src/app
COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "node", "js/server.js" ]