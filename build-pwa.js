/**
 * PWA Build Script
 * Used to process PWA-related files during the build process
 */

const fs = require('fs');
const path = require('path');

// 获取应用版本
const packageJson = require('./package.json');
const appVersion = packageJson.version || '1.0.0';

// 构建目录
const buildDir = path.join(__dirname, 'build');

// 处理service-worker.js文件
function processServiceWorker() {
  const swPath = path.join(buildDir, 'service-worker.js');
  
  if (fs.existsSync(swPath)) {
    let swContent = fs.readFileSync(swPath, 'utf8');
    
    // 替换缓存名称中的版本号
    swContent = swContent.replace(
      /const CACHE_NAME = ['|"]smart-sports-booking-v[^'|"]*['|"]/,
      `const CACHE_NAME = 'smart-sports-booking-v${appVersion}'`
    );
    
    fs.writeFileSync(swPath, swContent);
    console.log('✅ Service worker file version updated');
  } else {
    console.log('⚠️ Service worker file not found');
    
    // 从public目录复制service-worker.js文件
    const publicSwPath = path.join(__dirname, 'public', 'service-worker.js');
    if (fs.existsSync(publicSwPath)) {
      let swContent = fs.readFileSync(publicSwPath, 'utf8');
      
      // 替换缓存名称中的版本号
      swContent = swContent.replace(
        /const CACHE_NAME = ['|"]smart-sports-booking-v[^'|"]*['|"]/,
        `const CACHE_NAME = 'smart-sports-booking-v${appVersion}'`
      );
      
      fs.writeFileSync(swPath, swContent);
      console.log('✅ Service worker file copied from public directory and version updated');
    }
  }
}

// 处理manifest.json文件
function processManifest() {
  const manifestPath = path.join(buildDir, 'manifest.json');
  
  if (fs.existsSync(manifestPath)) {
    const manifest = require(manifestPath);
    
    // 确保manifest包含所有必要的字段
    manifest.version = appVersion;
    
    // 写回文件
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    console.log('✅ Manifest file updated');
  } else {
    console.log('⚠️ Manifest file not found');
  }
}

// 主函数
function main() {
  console.log('🚀 Starting PWA file processing...');
  
  // 确保构建目录存在
  if (!fs.existsSync(buildDir)) {
    console.error('❌ Build directory does not exist, please run npm run build first');
    process.exit(1);
  }
  
  // 处理文件
  processServiceWorker();
  processManifest();
  
  console.log('✨ PWA file processing completed');
}

// 执行主函数
main();