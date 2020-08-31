FROM node:14
WORKDIR /usr/src/app
COPY ./ ./
RUN sh ./build.sh
EXPOSE 3000
CMD [ "node", "./backend/bin.js" ]