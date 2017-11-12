FROM node:6-alpine
RUN npm install -g jest
RUN npm install -g eslint
RUN npm -v
ADD package.json /home/node/app/
RUN npm install --production
ADD *.js /home/node/app/
ADD *.json /home/node/app/
WORKDIR /home/node/app
CMD ["npm", "test"]

