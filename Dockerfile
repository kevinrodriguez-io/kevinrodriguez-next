FROM node:alpine

WORKDIR /usr/src/app

ENV PORT 3000
ENV HOST 0.0.0.0

COPY package.json ./

RUN yarn

COPY . .

CMD ls -ll /usr/src/app

RUN yarn build

CMD yarn start
