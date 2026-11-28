
"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log(
            "LEXICON service worker registered:",
            registration.scope
          );
        })
        .catch((error) => {
          console.error(
            "LEXICON service worker registration failed:",
            error
          );
        });
    }
  }, []);

  return null;
}
