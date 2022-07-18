FROM node:16-alpine

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

COPY --from=builder /app/frontend/public ./public
COPY --from=builder /app/frontend/.next ./.next
COPY --from=builder /app/frontend/node_modules ./node_modules
COPY --from=builder /app/frontend/package.json ./package.json
COPY --from=builder /app/frontend/next.config.js ./next.config.js

EXPOSE 3000 1337

CMD ["yarn", "serve"]
