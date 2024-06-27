FROM node:16

WORKDIR /app

COPY ./backend ./backend
COPY ./frontend ./frontend

WORKDIR /app/frontend
RUN npm install

WORKDIR /app/backend
RUN npm install

WORKDIR /app

EXPOSE 3000
EXPOSE 8080

CMD ["sh", "-c", "cd backend && node server.js & cd ./frontend && npm start"]
