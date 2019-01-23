FROM node:10

# MAINTAINER vanthanh <vanthanhgt89@gmail.com>

WORKDIR /src/app

COPY ./myapp/package*.json ./

RUN npm install --no-cache=true\
 && mkdir /src/logs

COPY ./myapp /src/app

EXPOSE 8011

CMD ["npm", "start"]


