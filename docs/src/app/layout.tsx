import "@/styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import localFont from "next/font/local";
import Script from "next/script";
import Header from "@/components/header";

config.autoAddCss = false;

const inter = localFont({
  display: "swap",
  preload: true,
  src: "../../public/fonts/inter/inter.ttf",
  variable: "--font-inter",
  weight: "400 700"
});

const shantellSans = localFont({
  display: "swap",
  preload: true,
  src: [
    {
      path: "../../public/fonts/shantell-sans/shantell-sans-regular.ttf",
      style: "normal",
      weight: "400 700"
    },
    {
      path: "../../public/fonts/shantell-sans/shantell-sans-italic.ttf",
      style: "italic",
      weight: "400 700"
    }
  ],
  variable: "--font-shantell-sans"
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
  title: {
    default: "Luxa CSS",
    template: "%s • Luxa CSS"
  },
  description:
    "The minimalist CSS framework for quickly designing, building and shipping!",
  openGraph: {
    url: "https://www.luxacss.com",
    siteName: "Luxa CSS",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.luxacss.com/og.png"
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  twitter: {
    title: "Luxa CSS",
    card: "summary_large_image"
  },
  alternates: {
    canonical: "/"
  }
};

export const viewport = {
  themeColor: "#f8fafc"
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${shantellSans.variable} ${commitMono.variable}`}
    >
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
