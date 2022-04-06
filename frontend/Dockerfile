FROM node:17

WORKDIR /app
COPY ./ ./
RUN npm install && chown -R node /app

USER node 

CMD ["npm", "start"]