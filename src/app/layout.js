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
  description:
    "Hi, I’m Harsh, a dedicated Web Developer passionate about building fast, functional, and scalable web applications using JavaScript, React.js, and Next.js.",
  keywords: "Web Developer, Photographer, Creative Editor",
  authors: [{ name: "Harsh Raghavani" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lexend.variable}>
      <body>
        <Provider>
          {children}
          <Analytics />
        </Provider>
      </body>
    </html>
  );
}
