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
        className={`${inter.className} text-[#4a3b44] subpixel-antialiased selection:bg-[#f06c9b] selection:text-[#fff8f0]`}
        suppressHydrationWarning={true}
      >
        <div className="flex min-h-screen flex-row">
          <header className="absolute z-10 w-full items-center bg-[#fceaea] lg:hidden">
            <Navbar />
          </header>
          <header className="sticky top-0 max-h-screen w-1/5 bg-[#fceaea] max-lg:hidden 2xl:w-2/12">
            <Sidebar />
          </header>
          <main className="w-4/5 grow bg-[#f6f4eb] px-8 py-20 2xl:w-10/12">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
