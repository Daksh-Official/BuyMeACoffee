import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import SessionWrapper from "@/components/SessionWrapper";

export const metadata = {
  title: "Home - BuyMeACoffee",
  description: "Buy me a Coffee is a platform that helps creators collect donations from thier fans in an easy manner.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
      </head>
      <body className="relative h-full text-white min-h-screen w-full bg-slate-950 overflow-x-hidden">
        <SessionWrapper>
          <Navbar />
          {children}
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
