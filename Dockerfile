FROM node:alpine

WORKDIR /usr/src/app

ENV PORT 3000
ENV HOST 0.0.0.0

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

CMD yarn start