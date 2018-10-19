FROM node:latest

MAINTAINER Aries

ENV NODE_ENV=development
ENV PORT=3000

COPY . var/www
WORKDIR /var/www

RUN npm install

EXPOSE ${port}

ENTRYPOINT ["node", "app.js"]