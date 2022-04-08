FROM node:17-alpine

WORKDIR /app

COPY . .

COPY /routes /app

COPY /models /app

RUN npm install

EXPOSE 4000


CMD [ "node", "index.js"]


# Docker Scripts
#
#
#
#
#
