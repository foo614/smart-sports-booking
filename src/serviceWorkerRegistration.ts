// 此可选代码用于注册服务工作线程
// 在生产环境中注册有效，而在开发环境中会被忽略

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] 是 IPv6 localhost 地址
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 被认为是 localhost
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

type Config = {
  onSuccess?: (registration: ServiceWorkerRegistration) => void;
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
};

export function register(config?: Config): void {
  // 检查是否启用了PWA功能（通过环境变量控制）
  const isPwaEnabled = process.env.REACT_APP_PWA_ENABLED === 'true';
  
  // 只在生产环境或明确启用PWA的情况下注册服务工作线程
  if ((process.env.NODE_ENV === 'production' || isPwaEnabled) && 'serviceWorker' in navigator) {
    // URL 构造函数可用于解析 origin 和 pathname
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // 如果我们的 origin 与 PUBLIC_URL 的 origin 不匹配，
      // 则服务工作线程将不起作用，因为它将从不同的 origin 提供资源
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // 这是在本地运行的，让我们检查服务工作线程是否仍然存在
        checkValidServiceWorker(swUrl, config);

        // 为开发人员添加一些额外的日志记录，指出服务工作线程/PWA 文档
        navigator.serviceWorker.ready.then(() => {
          console.log(
            '此 Web 应用程序正在通过服务工作线程提供服务。' +
              '要了解更多信息，请访问 https://cra.link/PWA'
          );
        });
      } else {
        // 不是本地主机，只需注册服务工作线程
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl: string, config?: Config): void {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // 此时，更新的预缓存内容已获取，
              // 但之前的服务工作线程仍将提供旧内容
              // 直到所有客户端选项卡关闭
              console.log(
                '新内容可用，请刷新页面。'
              );

              // 执行回调
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // 此时，所有内容都已预缓存
              // 这是使用 "Content is cached for offline use." 消息的完美时机
              console.log('内容已缓存以供离线使用。');

              // 执行回调
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error('服务工作线程注册期间出错：', error);
    });
}

function checkValidServiceWorker(swUrl: string, config?: Config): void {
  // 检查我们是否可以找到服务工作线程
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' },
  })
    .then((response) => {
      // 确保服务工作线程存在，并且我们真的得到了 JS 文件
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // 找不到服务工作线程，可能是不同的应用程序
        // 重新加载页面
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // 找到服务工作线程，继续正常
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log('无法连接到互联网。应用程序正在离线模式下运行。');
    });
}

export function unregister(): void {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}