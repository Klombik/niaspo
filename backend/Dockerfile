FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь остальной код в контейнер
COPY . .

# Указываем порт, который будет слушать приложение
EXPOSE 8080

# Команда для запуска приложения
CMD ["node", "app.js"]