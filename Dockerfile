FROM node:20.17-slim
# FROM znck/pnpm

WORKDIR /app

# COPY package*.json .

# RUN pnpm install

COPY . .

# RUN pnpm run build

# RUN pnpm add pnpm@latest

# RUN pnpm run dev

# ENV NODE_ENV=production

EXPOSE 3000

# CMD ["serve", "-s", "out", "-l", "3000"]
# CMD ls -a
CMD npm run dev