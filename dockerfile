# syntax=docker.io/docker/dockerfile:1

FROM oven/bun:1.2.2 AS bun

FROM node:22 AS node

# Install dependencies only when needed
FROM bun AS deps
WORKDIR /app

# install python
# we need python to install better-sqlite3 which is a dependency of next-jerni-dev-plugin
RUN apt-get update && apt-get install -y python3 python3-pip

# Install dependencies based on the preferred package manager
COPY package.json bun.lock* .bunfig.toml ./
RUN \
  if [ -f bun.lock ]; then bun install --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM bun AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV COGNITO_MOCK_COMMANDS=false

RUN bun run build

# Production image, copy all the files and run next
FROM node AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder /app/.next ./.next

EXPOSE 4000

ENV PORT=4000

ENV HOSTNAME="0.0.0.0"
CMD ["npm", "run", "start"]