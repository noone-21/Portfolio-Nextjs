import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import  ThemeProvider  from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://duhonyoung.com'),
  title: "Danish Ahmed -- It's Me Danii",
  description: "Full Stack Developer",
  keywords: "web development, full stack developer, graphic design, portfolio",
  authors: [{ name: "Danish Ahmed" }],
  creator: "Danish Ahmed",
  publisher: "It's Me Danii",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://duhonyoung.com",
    siteName: "Danish Ahmed Portfolio",
    title: "Danish Ahmed -- It's Me Danii",
    description: "Full Stack Developer",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Danish Ahmed Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Danish Ahmed -- It's Me Danii",
    description: "Full Stack Developer",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <head>
        <Script
          id="Cookiebot"
          strategy="afterInteractive"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="78f8cf19-8bd4-4c93-932c-6243a8cafe31"
          type="text/javascript"
        />
      </head>
      <body className={`${inter.className} relative min-h-screen overflow-y-auto overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Background />
          <div className="relative mx-auto flex max-w-screen-2xl flex-col justify-between gap-4 p-4 lg:gap-6 lg:p-6">
            <Header />
            {children}
          </div>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
