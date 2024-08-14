import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export interface NavbarProps {
  readonly handlePrevPage: () => void;
  readonly handleNextPage: () => void;
  readonly pageIndex: number;
}

export default function Navbar({
  handlePrevPage,
  handleNextPage,
  pageIndex,
}: NavbarProps) {
  const pageHeaders: string[] = [
    "Profile",
    "About",
    "Experience",
    "Research",
    "Interests",
  ];

  return (
    <nav className="flex h-12 items-center px-8">
      <div className="flex flex-grow flex-row place-content-between items-center text-white">
        {pageIndex !== 0 ? (
          <button className="rounded-full p-2" onClick={handlePrevPage}>
            <FaAngleLeft />
          </button>
        ) : (
          <div className="px-4"></div>
        )}
        <div>{pageHeaders.at(pageIndex)}</div>
        {pageIndex !== 4 ? (
          <button className="rounded-full p-2" onClick={handleNextPage}>
            <FaAngleRight />
          </button>
        ) : (
          <div className="px-4"></div>
        )}
      </div>
    </nav>
  );
}
