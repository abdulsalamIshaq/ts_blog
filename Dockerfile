FROM node:12.16-alpine

WORKDIR /blog

COPY . .

RUN npm install

CMD [ "node", "dist/index.js" ]