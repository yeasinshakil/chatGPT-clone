import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideBar from "./components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatGPT Clone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <div className=" bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
          <SideBar />
        </div>
        <div className=" bg-[#343541] flex-1">{children}</div>
      </body>
    </html>
  );
}
