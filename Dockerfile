FROM node:20.17-slim

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

ENV NEXT_PUBLIC_API_BASE_URL=http://localhost:5001
# docker run -e NEXT_PUBLIC_API_BASE_URL=http://my-new-url.com -p 3000:3000 fallingsakura/technews-frontend:latest

CMD ["npm", "start"]