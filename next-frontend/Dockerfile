FROM node:lts-alpine

WORKDIR /app

COPY  package*.json ./

RUN npm i

COPY . .

ENV NEXT_PUBLIC_API_BASE=/
ENV NEXT_PUBLIC_API_BASE_BACKEND=http://api:3000

RUN npm run build

CMD npm run start