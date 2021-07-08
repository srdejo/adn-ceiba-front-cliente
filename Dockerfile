FROM node:10-alpine as build
WORKDIR /app
COPY package*.json /app/
RUN npm install 
COPY . /app
ARG configuration=production
RUN npm run build -- --outputPath=./dist/out --configuration $configuration

FROM nginx:alpine
COPY --from=build /app/dist/out/ /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]