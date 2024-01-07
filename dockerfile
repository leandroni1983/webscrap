FROM node:18

WORKDIR /usr/src/server.js

COPY package*.json ./
RUN npm i 

COPY . .

CMD [ "npm","start"]