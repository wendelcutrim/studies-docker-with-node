FROM node:16

WORKDIR /src

COPY package.json /src

RUN npm i

COPY . .

EXPOSE 3000

CMD ["node", "./src/app.js"]
