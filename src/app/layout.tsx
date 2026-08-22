import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAURABH RAWAT — Cinematic Portfolio",
  description:
    "Saurabh Rawat — Computer Science student, builder, and software engineer working across AI, software systems, IoT and intelligent applications.",
  keywords: [
    "Saurabh Rawat",
    "Computer Science Engineer",
    "AI Developer",
    "Computer Vision",
    "FastAPI",
    "Next.js",
    "IoT",
    "Graphic Era University",
  ],
  authors: [{ name: "Saurabh Rawat", url: "https://github.com/saurabhrawatgthb" }],
  openGraph: {
    title: "SAURABH RAWAT — Cinematic Portfolio",
    description:
      "Cinematic personal portfolio, mission case files, and engineering projects of Saurabh Rawat.",
    type: "website",
    locale: "en_US",
    siteName: "Saurabh Rawat",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAURABH RAWAT — Cinematic Portfolio",
    description:
      "Saurabh Rawat — Computer Science student, builder, and software engineer working across AI, software systems, IoT and intelligent applications.",
    creator: "@SaurabhRawattt",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/pricedown"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white antialiased selection:bg-gta-pink selection:text-white">
        {children}
      </body>
    </html>
  );
}
