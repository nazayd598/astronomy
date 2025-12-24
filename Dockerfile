FROM node:18-alpine
WORKDIR /app
COPY . .
# Herhangi bir kütüphane eklemedik, standart fetch kullandık.
CMD ["node", "main.js"]
