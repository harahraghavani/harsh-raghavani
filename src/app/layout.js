import { Analytics } from "@vercel/analytics/react";
import Provider from "@/provider/Provider";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata = {
  title: "Harsh Raghavani",
  description: "Web Developer, Photographer, Creative Editor",
  keywords: "Web Developer, Photographer, Creative Editor",
  author: "Harsh Raghavani",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lexend.variable}>
      <head>
        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Harsh Raghavani" />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://harshraghavani.vercel.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://harshraghavani.vercel.app/your-image.jpg"
        />

        {/* Twitter Card for better sharing */}
        <meta name="twitter:title" content="Harsh Raghavani" />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="https://harshraghavani.vercel.app/your-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data (JSON-LD) for Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Harsh Raghavani",
              jobTitle: "Web Developer, Photographer, Creative Editor",
              url: "https://justaclick.myportfolio.com",
              sameAs: [
                "https://www.linkedin.com/in/harshraghavani",
                "https://www.instagram.com/justaclick.24",
                "https://unsplash.com/@justaclick_24",
                "https://github.com/harahraghavani",
                "https://in.pinterest.com/justaclick_24",
                "https://www.pexels.com/@justaclick",
                "https://www.behance.net/harshraghvani",
                "https://filtergrade.com/product/dark-green-leaves-lightroom-preset-mobile-desktop",
              ],
            }),
          }}
        />

        <title>{metadata.title}</title>
      </head>

      <body>
        <Provider>
          {children}
          <Analytics />
        </Provider>
      </body>
    </html>
  );
}
