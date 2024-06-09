# Usar una imagen base de Node.js
FROM node:16

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo package.json y package-lock.json
COPY package*.json ./

# Limpiar la caché de npm y solucionar problemas de red
RUN npm cache clean --force && \
    npm install --legacy-peer-deps

# Copiar el resto de los archivos
COPY . .

# Construir la aplicación
RUN npm run build

# Instalar un servidor HTTP para servir el contenido estático
RUN npm install -g serve

# Exponer el puerto
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["serve", "-s", "build"]
