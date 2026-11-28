
const CACHE_NAME = "lexicon-v2";
const STATIC_CACHE = "lexicon-static-v2";
const APP_PREFIX = "lexicon-";

// Files that should be available immediately after installation.
// Create public/offline.html in Step 2.
const APP_FILES = [
  "/offline.html",
  "/manifest.webmanifest",
  "/icon-192.png",
  "/icon-512.png",
  "/apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then(async (cache) => {
      await Promise.allSettled(
        APP_FILES.map((file) => cache.add(file))
      );
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(async (keys) => {
      await Promise.all(
        keys
          .filter(
            (key) =>
              key.startsWith(APP_PREFIX) &&
              key !== CACHE_NAME &&
              key !== STATIC_CACHE
          )
          .map((key) => caches.delete(key))
      );

      await self.clients.claim();
    })
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Only handle requests from the LEXICON website.
  if (url.origin !== self.location.origin) return;

  // HTML pages: network first, cached page if offline.
  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(request);

          if (response.ok) {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(request, response.clone());
          }

          return response;
        } catch (error) {
          const cachedPage = await caches.match(request);

          if (cachedPage) return cachedPage;

          const homePage = await caches.match("/");

          if (homePage) return homePage;

          return (
            await caches.match("/offline.html")
          );
        }
      })()
    );

    return;
  }

  // Static app files: use cache first, then network.
  if (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/icons/") ||
    /\.(?:js|css|png|jpg|jpeg|svg|webp|ico|woff2?)$/i.test(
      url.pathname
    )
  ) {
    event.respondWith(
      (async () => {
        const cached = await caches.match(request);

        if (cached) return cached;

        try {
          const response = await fetch(request);

          if (response.ok) {
            const cache = await caches.open(STATIC_CACHE);
            await cache.put(request, response.clone());
          }

          return response;
        } catch (error) {
          return new Response("Asset unavailable offline.", {
            status: 503,
            headers: { "Content-Type": "text/plain" }
          });
        }
      })()
    );

    return;
  }

  // Other same-origin GET requests: network first.
  event.respondWith(
    (async () => {
      try {
        const response = await fetch(request);

        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(request, response.clone());
        }

        return response;
      } catch (error) {
        const cached = await caches.match(request);

        if (cached) return cached;

        return new Response("This content is unavailable offline.", {
          status: 503,
          headers: { "Content-Type": "text/plain" }
        });
      }
    })()
  );
});
