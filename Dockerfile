# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.9.0
FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

# Variables de entorno
ENV NODE_ENV=production \
    NODE_MAX_LISTENERS=50 \
    NODE_OPTIONS="--trace-warnings"

# Instala solo las dependencias necesarias
RUN apk update && apk add --no-cache \
    nodejs \
    yarn \
    ca-certificates

# Instala dependencias de npm usando caching
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev --verbose

# Usa un usuario no root
USER node

# Copia el resto del código
COPY . .

# Expone el puerto que usa tu app
EXPOSE 3001

# Comando para iniciar la app
CMD ["node", "server.js"]
