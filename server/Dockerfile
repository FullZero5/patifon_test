FROM node:14-alpine
RUN npm install -g json-server
WORKDIR /usr/src/server
VOLUME /data

EXPOSE 8015
ADD run.sh /run.sh
ENTRYPOINT ["bash", "/run.sh"]
CMD []