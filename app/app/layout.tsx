import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LuxeGlow Beauty & Spa",
  description: "A professional website for a modern service business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
