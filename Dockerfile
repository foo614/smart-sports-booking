# 构建阶段
FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# 确保PWA相关文件正确构建
RUN npm run build

# 生产阶段
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]