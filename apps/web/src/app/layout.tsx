import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TextbookAI",
  description: "This is an app to interact with textbooks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
