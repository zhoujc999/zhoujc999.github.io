import "./globals.css";

import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Jingchao Zhou",
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
        className={`${open_sans.className} text-[#000000] subpixel-antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
