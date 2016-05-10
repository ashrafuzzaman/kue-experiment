FROM node:0.12-slim
RUN mkdir /code
WORKDIR /code

ADD package.json /code/
RUN npm install

ADD . /code/
CMD npm start

EXPOSE 3000
