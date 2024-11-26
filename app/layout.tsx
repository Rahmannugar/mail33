import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Mail 33",
  description: "This is a mail client service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>{children}</body>
    </html>
  );
}
