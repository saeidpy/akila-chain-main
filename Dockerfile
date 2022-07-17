FROM strapi/base:4.2.2

WORKDIR /app

COPY  ["./apps/backend/yarn.lock", "./apps/backend/package.json", "./"] 

RUN yarn install --frozen-lockfile

COPY ./apps/backend .

RUN yarn build

CMD "yarn" "develop"


FROM node:16

RUN mkdir -p /var/www/

WORKDIR /var/www/

COPY  ["./apps/frontend/yarn.lock", "./apps/frontend/package.json", "./"] 

RUN yarn install --frozen-lockfile

COPY ./apps/frontend /var/www/

RUN yarn build

CMD "yarn" "dev"
