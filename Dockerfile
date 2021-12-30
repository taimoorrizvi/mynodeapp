FROM docker.io/node:14.18-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install
RUN npm install mysql
RUN npm install mysql2

#COPY --chown=node:node . .

COPY . .

EXPOSE 8080

CMD [ "node", "app.js" ]
