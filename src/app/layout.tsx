import "./globals.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yihan Shi",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} subpixel-antialiased`}
        suppressHydrationWarning={true}
      >
        <div className="flex min-h-screen flex-row">
          <header className="absolute z-10 w-full items-center md:hidden bg-[#fff8f0]">
            <Navbar />
          </header>
          <header className="sticky top-0 max-h-screen w-80 max-md:hidden bg-[#fff8f0]">
            <Sidebar />
          </header>
          <main className="grow bg-[#ffdeca] px-8 py-20">{children}</main>
        </div>
      </body>
    </html>
  );
}
