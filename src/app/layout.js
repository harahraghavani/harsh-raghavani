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
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
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
