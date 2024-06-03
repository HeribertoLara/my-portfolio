import {  Urbanist } from "next/font/google";
import "./globals.scss";


const urbanist = Urbanist({ 
  subsets: ["latin"], 
  weight:["100","300","500","700"]
});

export const metadata = {
  title: "Heriberto Lara",
  description: "Portfolio Web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
