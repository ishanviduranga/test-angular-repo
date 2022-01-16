# Stage 1
FROM node:12.16.2-alpine as build-app

WORKDIR /app

COPY package.json /app/package.json
RUN npm install
COPY . .
RUN npm run build

# Stage 2
FROM nginx:1.21.5-alpine
COPY --from=build-app /app/dist/test-angular-project /usr/share/nginx/html

EXPOSE 80