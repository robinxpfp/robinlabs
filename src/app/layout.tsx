import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.robinlabs.xyz/"),
  title: { default: "Robin Labs", template: "%s | Robin Labs" },
  description: "Software Developer",
  openGraph: {
    title: "Robin Labs",
    description: "Software Developer.",
    url: "https://www.robinlabs.xyz/",
    siteName: "Robin Labs",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Robin",
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href="/pfp.jpg" type="image/jpeg" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="a07e2826-5910-4684-9e69-0ec4388a0509"
          async
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground dark:bg-darkBackground dark:text-darkForeground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
