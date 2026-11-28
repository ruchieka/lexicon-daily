
"use client";

import { useEffect, useState } from "react";

interface InstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallButton() {
  const [installEvent, setInstallEvent] =
    useState<InstallPromptEvent | null>(null);

  const [showGuide, setShowGuide] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    const ios = /iPhone|iPad|iPod/i.test(ua);

    setIsIOS(ios);

    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as Navigator & { standalone?: boolean }).standalone;

    if (standalone) setIsInstalled(true);

    const handleInstall = (event: Event) => {
      event.preventDefault();
      setInstallEvent(event as InstallPromptEvent);
    };

    const handleInstalled = () => {
      setIsInstalled(true);
      setInstallEvent(null);
    };

    window.addEventListener("beforeinstallprompt", handleInstall);
    window.addEventListener("appinstalled", handleInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleInstall);
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  async function handleInstall() {
    if (isIOS) {
      setShowGuide(true);
      return;
    }

    if (installEvent) {
      await installEvent.prompt();
      const choice = await installEvent.userChoice;

      if (choice.outcome === "accepted") {
        setIsInstalled(true);
      }

      setInstallEvent(null);
      return;
    }

    setShowGuide(true);
  }

  if (isInstalled) return null;

  return (
    <>
      <button
        onClick={handleInstall}
        className="rounded-full bg-[#28251F] px-6 py-3 text-sm font-medium text-white transition hover:opacity-80"
      >
        ↓ Install Lexicon Daily
      </button>

      {showGuide && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-5">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="install-title"
            className="w-full max-w-sm rounded-2xl bg-[#F8F5EF] p-7 text-[#28251F] shadow-xl"
          >
            <button
              onClick={() => setShowGuide(false)}
              className="float-right text-xl"
              aria-label="Close installation guide"
            >
              ×
            </button>

            <p className="text-xs uppercase tracking-[0.25em]">
              LEXICON DAILY
            </p>

            <h2
              id="install-title"
              className="mt-3 font-serif text-2xl"
            >
              Take your words with you.
            </h2>

            <p className="mt-3 text-sm leading-6">
              Add Lexicon Daily to your home screen and keep
              your vocabulary journey one tap away.
            </p>

            {isIOS ? (
              <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-6">
                <li>Open this page in Safari.</li>
                <li>Tap the Share icon.</li>
                <li>Select Add to Home Screen.</li>
                <li>Tap Add to finish installation.</li>
              </ol>
            ) : (
              <p className="mt-5 text-sm leading-6">
                Open your browser menu and select
                <strong> Install app </strong>
                or <strong>Add to Home Screen</strong>.
              </p>
            )}

            <button
              onClick={() => setShowGuide(false)}
              className="mt-7 w-full rounded-full bg-[#28251F] py-3 text-white"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}
