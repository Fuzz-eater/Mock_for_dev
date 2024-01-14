FROM node:18-alpine

WORKDIR /usr/src/app

COPY ./mock/package.json /usr/src/app/

RUN npm install

COPY ./mock /usr/src/app/

EXPOSE 8080
