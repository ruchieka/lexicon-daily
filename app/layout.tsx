
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import ServiceWorkerRegistration from "./components/ServiceWorkerRegistration";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Lexicon Daily — A little pretension never hurt.",
  description:
    "A daily vocabulary experience for the verbally insufferable.",
  applicationName: "Lexicon Daily",

  manifest: "/manifest.webmanifest",

  appleWebApp: {
    capable: true,
    title: "Lexicon Daily",
    statusBarStyle: "default",
  },

  icons: {
    icon: [
      {
        url: "/favicon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8F5EF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ServiceWorkerRegistration />

        <Navigation />

        <div className="pb-20 md:pb-0">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
