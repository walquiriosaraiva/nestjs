FROM node:16-alpine

ARG UID
ARG GID

ENV UID=${UID}
ENV GID=${GID}

#USER root

RUN addgroup -g ${GID} --system nestjs
RUN adduser -G nestjs --system -D -s /bin/sh -u ${UID} nestjs

WORKDIR /usr/src

RUN npm cache clean --force
RUN npm config set unsafe-perm true

RUN mkdir node_modules

#RUN mkdir tmp

#USER node
#RUN npm install
