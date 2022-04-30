FROM node:12-alpine

WORKDIR /app
ADD . /app/

ENV HOST 0.0.0.0
EXPOSE 5001
RUN yarn install
RUN yarn global add pm2
# TypeScript
RUN yarn build
CMD ["pm2-runtime", "start", "app-pm2.json"]
# RUN yarn start
