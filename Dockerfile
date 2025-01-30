FROM node:22-alpine AS development-dependencies-env
COPY . /src
WORKDIR /src
RUN pnpm i --frozen-lockfile

FROM node:22-alpine AS production-dependencies-env
COPY ./package.json pnpm-lock.yaml /src/
WORKDIR /src
RUN pnpm i --frozen-lockfile --prod

FROM node:22-alpine AS build-env
COPY . /src/
COPY --from=development-dependencies-env /src/node_modules /src/node_modules
WORKDIR /src
RUN pnpm build

FROM node:22-alpine
COPY ./package.json pnpm-lock.yaml /src/
COPY --from=production-dependencies-env /src/node_modules /src/node_modules
COPY --from=build-env /src/build /src/build
WORKDIR /src
CMD ["pnpm", "start"]
