var CACHE_NAME = 'Wordpress-cache-v1';
var urlsToCache = [
  '/',
  '/wp-content/YourThemeName/styles/main.css',
  '/wp-content/YourThemeName/script/main.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
