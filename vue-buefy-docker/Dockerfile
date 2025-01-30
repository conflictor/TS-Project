# Usa una imagen oficial de Node.js
FROM node:18-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos del proyecto
COPY package*.json ./
RUN npm install

# Copiar todo el código fuente al contenedor
COPY . .

# Exponer el puerto en el que se ejecutará Vue.js
EXPOSE 5173

# Comando para iniciar el servidor de desarrollo
CMD ["npm", "run", "dev"]
