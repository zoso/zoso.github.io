self.addListener('install', function(e) {
	console.log("install "+e);
});

self.addListener('activate', function(e) {
	console.log("activate "+e);
});

self.addListener('fetch', function(e) {
	console.log("fetch "+e.request.url);
});