FROM node:lts-alpine

WORKDIR /app

COPY  package*.json ./

RUN npm i

COPY . .

COPY .env.local.docker ./.env.local

RUN npm run build

CMD npm run start