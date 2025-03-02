# build stage
FROM node:16-alpine as build-stage

# Install Python and build dependencies
RUN apk add --no-cache python3 make g++ 
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .

# RUN npm run-script test:unit

RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
