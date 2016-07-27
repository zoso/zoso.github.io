self.addEventListener('install', function(e) {
	console.log("install "+e);
});

self.addEventListener('activate', function(e) {
	console.log("activate "+e);
});

self.addEventListener('fetch', function(e) {
	console.log("fetch "+e.request.url);
});