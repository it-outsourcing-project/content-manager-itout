# Используем Node.js 20
FROM node:20-alpine

# Установка рабочей директории
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Установка зависимостей
RUN npm install

# Копируем остальные файлы
COPY . .

# Сборка проекта
RUN npm run build

# Указываем порт для Strapi
EXPOSE 1337

# Запуск приложения
CMD ["npm", "start"]
