
importScripts('./js/sw-polyfill.js');

this.onpush = function(event) {
  console.log(event.data);
  // From here we can write the data to IndexedDB, send it to any open
  // windows, display a notification, etc.
}


self.addEventListener('install', function(e) {
	console.log("install "+e);
	self.skipWaiting();
	e.waitUntil(
		caches.open('test-app').then(function(cache) {
			return cache.addAll([
				'/',
				'/index.html',
				'/about.html',
				'/style.css'
			])
		})
	)
});

self.addEventListener('activate', function(e) {
	console.log("activate "+e);
});

self.addEventListener('fetch', function(e) {
	console.log("fetch "+e.request.url);
	e.respondWith(
		caches.match(e.request).then(function(response) {
			return response || fetch(e.request);
		});
	);
});