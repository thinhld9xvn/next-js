FROM node:12-alpine

WORKDIR /app
ADD . /app/

ENV HOST 0.0.0.0
EXPOSE 5003
# RUN yarn config set strict-ssl false
RUN yarn install
RUN yarn global add pm2
# TypeScript
RUN rm -rf .next
RUN yarn build
CMD ["pm2-runtime", "start", "app-pm2.json"]
# RUN yarn start
