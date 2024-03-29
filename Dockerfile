FROM node:16-alpine

ENV NODE_ENV production

#add turborepo
RUN apk add --no-cache libc6-compat
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

EXPOSE 3000 1337

CMD ["yarn", "serve"]