FROM node:19.0.1

WORKDIR /app

ADD package*.json ./

RUN npm install

ADD index.js ./

CMD ["node","index.js"]
# CMD ["npm","start"]

