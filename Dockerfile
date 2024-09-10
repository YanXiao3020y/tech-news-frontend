FROM node:22.8-slim
FROM znck/pnpm

WORKDIR /app

COPY . .

RUN pnpm install

RUN pnpm run build

RUN pnpm install -g serve

ENV NODE_ENV=production

EXPOSE 3000

CMD ["serve", "-s", "out", "-l", "3000"]