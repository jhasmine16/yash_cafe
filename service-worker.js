self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("Yash Cafe").then(function(cache){
      return cache.addAll(["index.html"])
    })
  );
});