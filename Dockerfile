FROM node:20.17-slim

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

ARG API_BASE_URL

ENV NEXT_PUBLIC_API_BASE_URL=${API_BASE_URL}

# docker run -e NEXT_PUBLIC_API_BASE_URL=http://my-new-url.com -p 3000:3000 fallingsakura/technews-frontend:latest

RUN npm run build

EXPOSE 3000


CMD ["npm", "start"]