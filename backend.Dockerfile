FROM strapi/base

WORKDIR /app

COPY  ["./apps/backend/yarn.lock", "./apps/backend/package.json", "./"] 

RUN yarn install --frozen-lockfile

COPY ./apps/backend .

CMD "yarn" "develop"