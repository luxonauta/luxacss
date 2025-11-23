import "@/styles/globals.css";

import localFont from "next/font/local";
import Script from "next/script";

import Header from "@/components/header";

const inter = localFont({
  display: "swap",
  preload: true,
  src: "../../public/fonts/inter/inter.ttf",
  variable: "--font-inter",
  weight: "400 700"
});

const commitMono = localFont({
  display: "swap",
  preload: true,
  src: [
    {
      path: "../../public/fonts/commit-mono/commit-mono-regular.ttf",
      style: "normal",
      weight: "400"
    },
    {
      path: "../../public/fonts/commit-mono/commit-mono-italic.ttf",
      style: "italic",
      weight: "400"
    }
  ],
  variable: "--font-commit-mono"
});

export const metadata = {
  metadataBase: new URL("https://www.luxacss.com"),
  applicationName: "Luxa CSS",
  title: {
    default: "Luxa CSS - The Minimalist CSS Library",
    template: "%s • Luxa CSS"
  },
  description:
    "The minimalist CSS library for quickly designing, building, and shipping!",
  author: {
    name: "Lucas de França",
    url: "https://www.luxonauta.com"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  keywords: ["css", "library", "design", "minimalist", "framework"],
  category: "Technology",
  openGraph: {
    url: "https://www.luxacss.com",
    siteName: "Luxa CSS",
    title: "Luxa CSS - The Minimalist CSS Library",
    description:
      "The minimalist CSS library for quickly designing, building, and shipping!",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.luxacss.com/og.png",
        width: 1200,
        height: 630,
        alt: "Luxa CSS Open Graph Image"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxa CSS - The Minimalist CSS Library",
    description:
      "The minimalist CSS library for quickly designing, building, and shipping!",
    creator: "@luxonauta",
    images: ["https://www.luxacss.com/og.png"]
  },
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export const viewport = {
  themeColor: "#f8fafc"
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${inter.variable} ${commitMono.variable}`}>
      <body>
        <div className="container">
          <Header />
          <main>{children}</main>
        </div>
        <Script
          defer
          data-domain="luxacss.com"
          src="https://plausible.io/js/script.js"
        />
      </body>
    </html>
  );
};

export default RootLayout;
