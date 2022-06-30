ARG API_BASE=

FROM node:lts-alpine

WORKDIR /app

COPY  package*.json ./

RUN npm i

COPY . .

ENV NEXT_PUBLIC_API_BASE=$API_BASE

RUN npm run build

CMD npm run start