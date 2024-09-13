FROM node:20.17-slim
FROM znck/pnpm

WORKDIR /app

COPY package*.json .

RUN pnpm install

COPY . .

RUN pnpm run build

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "run", "dev"]