FROM node:alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PORT 3000
ENV HOST 0.0.0.0

COPY package.json /usr/src/app/

RUN yarn

COPY . /

RUN yarn build

CMD yarn start
