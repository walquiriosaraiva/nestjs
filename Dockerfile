FROM node:16.13.1-alpine

RUN npm config set strict-ssl=false

RUN mkdir -p /usr/src
WORKDIR /usr/src

COPY . /usr/src

RUN npm install --force

ENTRYPOINT ["npm", "run", "start:dev"] 