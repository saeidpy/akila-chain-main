FROM node:16-alpine as BUILD_IMAGE

ENV NODE_ENV production

#add turborepo
RUN yarn global add turbo

#add strapi
RUN yarn global add @strapi/strapi@${STRAPI_VERSION}

WORKDIR /app

# Install app dependencies
COPY package.json yarn.lock ./

# install dependencies
RUN yarn install --frozen-lockfile

COPY . .

# build
RUN yarn build

FROM node:16-alpine

# Set working directory
WORKDIR /app

# copy from build image
COPY --from=BUILD_IMAGE /app/frontend/package.json ./package.json
COPY --from=BUILD_IMAGE /app/frontend/node_modules ./node_modules
COPY --from=BUILD_IMAGE /app/frontend/.next ./.next
COPY --from=BUILD_IMAGE /app/frontend/public ./public

EXPOSE 3000 1337

CMD ["yarn", "serve"]
