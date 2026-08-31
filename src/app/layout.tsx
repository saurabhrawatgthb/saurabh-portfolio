import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAURABH RAWAT",
  description:
    "Saurabh Rawat — Computer Science & Engineering Student at Graphic Era Hill University. Building systems, exploring AI, and turning ideas into working projects.",
  keywords: [
    "Saurabh Rawat",
    "Saurabh",
    "Computer Science & Engineering Student",
    "B.Tech CSE",
    "Graphic Era Hill University",
    "AI",
    "Computer Vision",
    "FastAPI",
    "Next.js",
    "IoT",
    "IEEE Student Branch GEHU",
  ],
  authors: [{ name: "Saurabh Rawat", url: "https://github.com/saurabhrawatgthb" }],
  openGraph: {
    title: "SAURABH RAWAT",
    description:
      "Cinematic personal portfolio, mission case files, and engineering projects of Saurabh Rawat — Computer Science & Engineering Student at Graphic Era Hill University.",
    type: "website",
    locale: "en_US",
    siteName: "SAURABH RAWAT",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAURABH RAWAT",
    description:
      "Saurabh Rawat — Computer Science & Engineering Student at Graphic Era Hill University. Building systems, exploring AI, and turning ideas into working projects.",
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
