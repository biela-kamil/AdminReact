FROM node:22.3.0-alpine AS build

WORKDIR /app
COPY package.json package-lock.json ./
COPY .env ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.27.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80

HEALTHCHECK CMD curl --fail http://localhost:80 || exit 1


CMD ["nginx", "-g", "daemon off;"]
