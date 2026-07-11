import type { Metadata } from "next";
import { Oxanium, Rajdhani } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
});

export const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "STASH - Your Ultimate Gaming Repository",
  description: "Your Ultimate Gaming Repository",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oxanium.className} ${rajdhani.className} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}
        <ToastContainer autoClose={2000} />
      </body>
    </html>
  );
}
