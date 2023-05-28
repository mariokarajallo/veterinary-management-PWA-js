//anadiendo archivos para cache
const nombreCache = "apv-v1";
const archivosCache = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./css/bootstrap.css",
  "./js/app.js",
  "./js/apv.js",
];

//cuando se instala el service worker
self.addEventListener("install", (e) => {
  console.log("Instalando el Service Worker");
  console.log(e);

  //espera que se descarguen todos los archivos del cache
  e.waitUntil(
    caches.open(nombreCache).then((cache) => {
      console.log("cacheando");
      cache.addAll(archivosCache);
    })
  );
});

// Activar el Service worker
self.addEventListener("activate", (e) => {
  console.log("Service Worker Activado");
  console.log(e);
});

// evento fetch para descargar archivos staticos
self.addEventListener("fetch", (e) => {
  console.log("fetch...", e);

  //mostrar todo el archivo que tenemos en cache cuando estamos Offline
  e.respondWith(
    caches.match(e.request).then((respuestaCache) => {
      return respuestaCache;
    })
  );
});
