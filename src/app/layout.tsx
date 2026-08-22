import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CRTOverlay } from "@/components/effects/CRTOverlay";
import { CustomCursor } from "@/components/effects/CustomCursor";

export const metadata: Metadata = {
  title: "The Saurabh Files — Saurabh Rawat",
  description:
    "Saurabh Rawat — Computer Science student, developer and builder working across AI, software systems, IoT and intelligent applications.",
  keywords: [
    "Saurabh Rawat",
    "The Saurabh Files",
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
    title: "The Saurabh Files — Saurabh Rawat",
    description:
      "Interactive personal archive, projects, and systems engineering portfolio of Saurabh Rawat.",
    type: "website",
    locale: "en_US",
    siteName: "The Saurabh Files",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Saurabh Files — Saurabh Rawat",
    description:
      "Saurabh Rawat — Computer Science student, developer and builder working across AI, software systems, IoT and intelligent applications.",
    creator: "@SaurabhRawattt",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0e0b",
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
    <html lang="en" className="dark">
      <body className="bg-crt-darkest text-archive-text antialiased selection:bg-term-green selection:text-crt-black">
        <CustomCursor />
        <CRTOverlay />
        <main className="relative min-h-screen">{children}</main>
      </body>
    </html>
  );
}
