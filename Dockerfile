FROM node:current-alpine3.12

WORKDIR /usr/src/app

COPY . .

EXPOSE 3232
CMD [ "node", "app.js" ]
