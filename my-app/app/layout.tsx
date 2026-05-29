import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
// Import Footer ở đây sau khi bạn tạo

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio cá nhân của tôi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        {/* <Footer /> */} 
      </body>
    </html>
  );
}