import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Colombo Natyanjali — Maha Shivaratri Bharatanatyam Tribute",
  description: "Sri Lanka's most celebrated classical Bharatanatyam tribute on Maha Shivaratri. Annual event featuring Nadanalayas from across Sri Lanka.",
  keywords: "Colombo Natyanjali, Bharatanatyam, Maha Shivaratri, Sri Lanka, classical dance, Nataraja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
