FROM node:lts

# create & set working directory
RUN mkdir /srv/client
WORKDIR /srv/client

# copy source files
COPY . /srv/client

# install dependencies
RUN npm install

# start app
RUN npm run build

CMD ["npm", "start"]

EXPOSE 3000