# 1. Remova o "v" da versão
FROM node:24.21.0-alpine AS base

WORKDIR /app

# 2. Copie os arquivos de dependências
COPY package*.json ./

# 3. Estágio de dependências e build
FROM base AS build
RUN npm ci

COPY . .

# Executa o build do TypeScript (gera a pasta dist/)
RUN npm run build

# 4. Estágio final de produção
FROM base AS production

ENV NODE_ENV=production

COPY package*.json ./
# Instala apenas as dependências de produção
RUN npm ci --only=production

# Copia apenas o código compilado da pasta "build" gerada no build
COPY --from=build /app/build ./build

EXPOSE 3000

CMD ["node", "build/src/app.js"]