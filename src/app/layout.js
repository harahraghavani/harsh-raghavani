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
    "I specialize in blending technical expertise with creative vision to craft exceptional digital experiences. With a strong foundation in HTML, CSS, JavaScript, React JS, and Next JS, I design and develop user-friendly, visually stunning web interfaces that captivate and engage audiences",
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
