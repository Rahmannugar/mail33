import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { Provider } from "./util/ThemeProvider";

export const metadata: Metadata = {
  title: "Mail 33",
  description: "This is a mail client service",
  icons: {
    icon: "/favicon.ico",
  },
};

export const jostFont = Jost({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`overflow-x-hidden ${jostFont.className}`}>
        <Provider> {children}</Provider>
      </body>
    </html>
  );
}
