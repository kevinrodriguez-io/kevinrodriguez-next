FROM node:alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PORT 3000
ENV HOST 0.0.0.0

COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/

RUN ls /usr/src/app/

RUN yarn

COPY . /usr/src/app/

RUN ls /usr/src/app/
RUN ls /usr/src/app/pages/
RUN ls /usr/src/app/components/

RUN yarn build

CMD yarn start
