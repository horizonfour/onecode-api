FROM node:8.5
ADD . /app
WORKDIR /app
RUN npm install
RUN npm install -g pm2
CMD ["pm2-docker","index.js"]
EXPOSE 8080
