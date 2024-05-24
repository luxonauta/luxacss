import "@/styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import { ViewTransitions } from "next-view-transitions";
import Header from "@/components/header";

config.autoAddCss = false;

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
  themeColor: "#0d172c"
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ViewTransitions>
      <html lang="en" className={`${inter.variable} ${commitMono.variable}`}>
        <body>
          <div className="aurora-overlay" aria-hidden="true" />
          <div className="container">
            <Header />
            <main>{children}</main>
          </div>
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
};

export default RootLayout;
