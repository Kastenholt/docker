FROM node:14-alpine AS builder
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build
#EXPOSE 3000
#CMD ["npm", "start"]

#FROM nginx:1.19-alpine AS server
#COPY --from=builder ./app/build /usr/share/nginx/html

FROM nginx:1.19-alpine AS server
COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder ./app/build /usr/share/nginx/html
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'

