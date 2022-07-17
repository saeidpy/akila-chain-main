FROM strapi/base:4.2.2

WORKDIR /app

COPY  ["./apps/backend/yarn.lock", "./apps/backend/package.json", "./"] 

RUN yarn install --frozen-lockfile

COPY ./apps/backend .

RUN yarn build

CMD "yarn" "develop"