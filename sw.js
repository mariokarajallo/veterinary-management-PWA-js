//cuando se instala el service worker
self.addEventListener("install", (e) => {
  console.log("Instalando el Service Worker");
  console.log(e);
});

// Activar el Service worker
self.addEventListener("activate", (e) => {
  console.log("Service Worker Activado");
  console.log(e);
});
