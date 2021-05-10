# Dockerfile
FROM node:11.13.0-alpine

# create destination directory
RUN mkdir -p /home/apps/reach-stripped
WORKDIR /home/apps/reach-stripped

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /home/apps/reach-stripped
RUN npm install
RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]