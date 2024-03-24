FROM node:lts-alpine3.19
WORKDIR /app
COPY . ./
RUN yarn
COPY . .
EXPOSE 3001
CMD yarn dev