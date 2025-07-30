// Cache name, using timestamp as version number to ensure cache is updated with each deployment
const CACHE_NAME = 'smart-sports-booking-v0.1.0' + new Date().getTime();

// List of resources to cache
const urlsToCache = [
  '/',
  '/index.html',
  '/offline.html',  // Offline page
  '/static/js/main.chunk.js',
  '/static/js/0.chunk.js',
  '/static/js/bundle.js',
  '/manifest.json',
  '/favicon.ico',
  '/logo192.png',
  '/logo512.png',
  // Add other resources to cache
];

// Install service worker and cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate service worker and clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
          return null;
        })
      );
    })
  );
});

// Intercept network requests and serve resources from cache
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Handle navigation requests (HTML page requests)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          // If navigation request fails (offline), return offline page
          return caches.match('/offline.html');
        })
    );
    return;
  }

  // Handle other resource requests (images, scripts, styles, etc.)
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // If cached response is found, return it
        if (response) {
          return response;
        }

        // Clone the request because it's a stream and can only be used once
        const fetchRequest = event.request.clone();

        // If no response in cache, fetch from network
        return fetch(fetchRequest)
          .then((response) => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response because it's a stream and can only be used once
            const responseToCache = response.clone();

            // Add the response to cache
            caches.open(CACHE_NAME)
              .then((cache) => {
                // Only cache same-origin requests
                if (event.request.url.startsWith(self.location.origin)) {
                  cache.put(event.request, responseToCache);
                }
              });

            return response;
          })
          .catch(() => {
            // If an image request fails, return a default offline image
            if (event.request.destination === 'image') {
              return caches.match('/logo192.png');
            }
            
            // For other resources, simply let the request fail
            return new Response('Network error', {
              status: 408,
              headers: { 'Content-Type': 'text/plain' }
            });
          });
      })
  );
});

// Handle push notifications
self.addEventListener('push', (event) => {
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: 'logo192.png',
    badge: 'favicon.ico',
    vibrate: [100, 50, 100],
    data: {
      url: data.url || '/',
    },
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});

// Background sync
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-bookings') {
    event.waitUntil(
      // Implement background sync logic here
      console.log('Background sync triggered')
    );
  }
});