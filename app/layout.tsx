import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Colombo Natyanjali 2026 — Maha Shivaratri Classical Dance Tribute",
  description: "Colombo Natyanjali Foundation's annual Maha Shivaratri offering of classical Indian dance — Bharatanatyam, Kathak, Kuchipudi, Odissi, Mohiniyattam & Manipuri — at New Kathiresan Kovil, Bambalapitiya, Colombo. 15 February 2026, 5.30 PM onwards.",
  keywords: "Colombo Natyanjali, Colombo Natyanjali Foundation, Maha Shivaratri, Bharatanatyam, Kathak, Kuchipudi, Odissi, Mohiniyattam, Manipuri, New Kathiresan Kovil, Bambalapitiya, Sri Lanka classical dance, Nataraja",
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
