import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaRegEnvelope,
  FaRegFolderOpen,
} from "react-icons/fa";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Link from "next/link";

export default function Home() {
  return (

      <div className="flex min-h-screen flex-row">
        <header className="absolute z-10 w-full items-center bg-[#003399] md:hidden">
          <Navbar />
        </header>
        <header className="sticky top-0 max-h-screen w-1/5 bg-[#fceaea] max-lg:hidden 2xl:w-2/12">
          <Sidebar />
        </header>
        <main className="w-4/5 grow bg-[#f6f4eb] px-8 py-20 2xl:w-10/12">
          <div>test</div>
        </main>
      </div>
  );
}
