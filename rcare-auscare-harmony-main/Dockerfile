# Step 1: Build stage
FROM node:18-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine

# Vite ka default build output: "dist"
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
