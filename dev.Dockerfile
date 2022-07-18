FROM node:16-alpine as BUILD_IMAGE

ENV NODE_ENV production

#add turborepo
RUN yarn global add turbo

#add strapi
RUN yarn global add @strapi/strapi@${STRAPI_VERSION}

# Set working directory
WORKDIR /app

# Install app dependencies
COPY  ["yarn.lock", "package.json", "./"] 

# Copy source files
COPY . .

# Install app dependencies
RUN yarn install --frozen-lockfile

RUN yarn build

# remove dev dependencies
RUN npm prune --production

FROM node:16-alpine

WORKDIR /app

COPY --from=BUILD_IMAGE /app/frontend/public ./public
COPY --from=BUILD_IMAGE /app/frontend/.next ./.next
COPY --from=BUILD_IMAGE /app/frontend/node_modules ./node_modules
COPY --from=BUILD_IMAGE /app/frontend/package.json ./package.json
COPY --from=BUILD_IMAGE /app/frontend/next.config.js ./next.config.js

EXPOSE 3000 1337

CMD ["yarn", "serve"]
