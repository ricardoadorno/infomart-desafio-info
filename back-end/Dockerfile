FROM node:18-alpine

WORKDIR /usr/app

COPY packge*.json ./
COPY ts.config.json ./
COPY ./prisma ./prisma
RUN yarn install 

RUN npx prisma generate
COPY . .

CMD ["yarn","start"]
