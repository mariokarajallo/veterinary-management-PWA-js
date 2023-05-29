//anadiendo archivos para cache
const nombreCache = "apv-v3";
const archivosCache = [
  "./",
  "./error.html",
  "./index.html",
  "./css/styles.css",
  "./css/bootstrap.css",
  "./js/app.js",
  "./js/apv.js",
  "./manifest.json",
];

//cuando se instala el service worker
self.addEventListener("install", (e) => {
  console.log("Instalando el Service Worker");

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

  //actualizamos nuestro cache con el ultimo cambio realizado
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== nombreCache)
          .map((key) => caches.delete(key)) //borra los demas caches antiguos
      );
    })
  );
});

// evento fetch para descargar archivos staticos
self.addEventListener("fetch", (e) => {
  console.log("Fetch...", e);

  //mostrar todo el archivo que tenemos en cache cuando estamos Offline
  e.respondWith(
    caches
      .match(e.request)
      .then((respuestaCache) => {
        return respuestaCache || fetch(e.request);
      })
      .catch(() => {
        return caches.match("/error.html");
        // console.log("Error al obtener la página de error");
      })
  );
});
