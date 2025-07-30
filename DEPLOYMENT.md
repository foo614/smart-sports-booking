# 部署指南

本文档提供了如何构建和部署 Smart Sports Booking 应用程序的详细说明。该应用已配置为渐进式Web应用（PWA），支持离线功能和添加到主屏幕。

## 构建生产版本

要构建生产版本的应用程序，请按照以下步骤操作：

1. 确保您已安装所有依赖项：

```bash
npm install
```

2. 构建生产版本：

```bash
npm run build
```

这将在 `build` 目录中创建一个优化的生产版本。

## 部署选项

### 1. 静态网站托管服务

您可以将构建后的应用程序部署到各种静态网站托管服务，例如：

- **Vercel**：适用于 React 应用程序的简单部署平台
  - 安装 Vercel CLI：`npm install -g vercel`
  - 部署：`vercel`
  - 生产部署：`vercel --prod`

- **Netlify**：另一个流行的静态网站托管服务
  - 安装 Netlify CLI：`npm install -g netlify-cli`
  - 部署：`netlify deploy`
  - 生产部署：`netlify deploy --prod`

- **GitHub Pages**：通过 GitHub 提供的免费托管服务
  - 安装 gh-pages：`npm install --save-dev gh-pages`
  - 在 package.json 中添加：`"homepage": "https://yourusername.github.io/smart-sports-booking"`
  - 添加部署脚本：`"deploy": "gh-pages -d build"`
  - 部署：`npm run deploy`

### 2. 传统 Web 服务器

您也可以将应用程序部署到传统的 Web 服务器，如 Apache 或 Nginx：

1. 将 `build` 目录中的所有文件复制到 Web 服务器的根目录或适当的子目录中。
2. 配置服务器以将所有请求重定向到 `index.html`，以支持 React Router 的客户端路由。

#### Apache 配置示例 (.htaccess)

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

#### Nginx 配置示例

```nginx
server {
  listen 80;
  server_name your-domain.com;
  root /path/to/build;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

### 3. Docker 部署

您可以使用 Docker 容器化应用程序：

1. 创建 Dockerfile：

```dockerfile
# 构建阶段
FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 生产阶段
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

2. 创建 nginx.conf：

```nginx
server {
  listen 80;
  location / {
    root /usr/share/nginx/html;
    index index.html index.htm;
    try_files $uri $uri/ /index.html;
  }
}
```

3. 构建并运行 Docker 镜像：

```bash
docker build -t smart-sports-booking .
docker run -p 80:80 smart-sports-booking
```

## 环境变量配置

如果您的应用程序使用环境变量，请确保在部署环境中正确设置它们。在 React 应用程序中，所有环境变量必须以 `REACT_APP_` 开头。

您可以在项目根目录中创建一个 `.env.production` 文件来设置生产环境变量：

```
REACT_APP_API_URL=https://api.example.com
```

## 持续集成/持续部署 (CI/CD)

考虑设置 CI/CD 管道以自动化部署过程：

- **GitHub Actions**：直接在 GitHub 仓库中设置自动化工作流
- **GitLab CI/CD**：如果您使用 GitLab 托管代码
- **Jenkins**：传统的 CI/CD 服务器

## PWA 配置

该应用已配置为渐进式Web应用（PWA），具有以下功能：

- **离线支持**：通过服务工作线程缓存关键资源
- **可安装**：用户可以将应用添加到主屏幕
- **响应式设计**：适应不同屏幕尺寸的设备
- **离线回退页面**：当用户离线时显示友好的提示

### PWA 部署注意事项

1. **HTTPS 要求**：PWA 必须通过 HTTPS 提供服务才能正常工作。确保您的部署环境支持 HTTPS。

2. **服务工作线程范围**：服务工作线程的作用范围受到其位置的限制。确保 `service-worker.js` 文件位于应用程序的根目录。

3. **缓存策略**：默认配置的缓存策略适用于大多数情况，但您可能需要根据应用程序的特定需求进行调整。

4. **更新机制**：当发布新版本时，服务工作线程会自动更新，但用户可能需要刷新页面或重新启动应用才能看到更改。

## 部署检查清单

在部署之前，请确保：

- 所有图片和资源都正确加载
- 所有路由都正常工作
- 应用程序在不同浏览器和设备上正常运行
- 性能和可访问性已经过测试
- 所有敏感信息（如 API 密钥）都通过环境变量安全地处理
- PWA 功能正常工作（安装提示、离线访问）
- manifest.json 文件配置正确
- 服务工作线程正确注册和运行

## 故障排除

如果您在部署过程中遇到问题：

1. 检查构建日志以查找错误
2. 确保所有依赖项都已正确安装
3. 验证服务器配置是否正确处理客户端路由
4. 检查浏览器控制台是否有错误消息

### PWA 特定问题

1. **服务工作线程未注册**：
   - 确保应用通过 HTTPS 提供服务
   - 检查 `service-worker.js` 文件是否在正确的位置
   - 在浏览器的开发者工具中检查 Application > Service Workers 选项卡

2. **无法安装到主屏幕**：
   - 验证 manifest.json 文件是否正确配置
   - 确保包含所有必需的图标尺寸
   - 检查 HTML 中是否正确链接了 manifest 文件

3. **离线功能不工作**：
   - 检查缓存策略是否正确配置
   - 验证关键资源是否已添加到缓存列表
   - 使用浏览器的开发者工具中的 Application > Cache Storage 检查缓存内容