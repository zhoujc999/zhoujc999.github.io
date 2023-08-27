import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="flex max-w-sm flex-col">
      <div className="flex flex-row items-center justify-between rounded-t-md bg-white px-4 pb-2 pt-4">
        <div className="flex flex-row gap-4">
          <div className="flex-none">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/keep_lifepieces/"
            >
              <Image
                src="/photos/profile.jpg"
                alt="Profile"
                className="rounded-full"
                width={56}
                height={56}
              />
            </Link>
          </div>
          <div className="flex-col justify-center text-sm">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/keep_lifepieces/"
            >
              <p className="font-bold">keep_lifepieces</p>
            </Link>
            <p className="text-xs text-[#737373]">🫕 and 📸</p>
            <p className="text-xs text-[#737373]">Photographer</p>
          </div>
        </div>
        <div className="flex-none">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/"
          >
            <Image
              src="/icons/instagram.svg"
              alt="Instagram Icon"
              width={32}
              height={32}
            />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-1 border-y border-[#dbdbdb] bg-white p-4">
        <div className="relative">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/p/CsX4Xl0ueKF/"
          >
            <div className="absolute h-full w-full rounded-md hover:bg-black hover:opacity-30"></div>
            <Image
              src="/photos/1.jpg"
              alt="Photo"
              className="rounded-md"
              width={256}
              height={256}
            />
          </Link>
        </div>
        <div className="relative">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/p/Cq4D-vuLVGk/"
          >
            <div className="absolute h-full w-full rounded-md hover:bg-black hover:opacity-30"></div>
            <Image
              src="/photos/2.jpg"
              alt="Photo"
              className="rounded-md"
              width={256}
              height={256}
            />
          </Link>
        </div>
        <div className="relative">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/p/CpjK1J3rj20/"
          >
            <div className="absolute h-full w-full rounded-md hover:bg-black hover:opacity-30"></div>
            <Image
              src="/photos/3.jpg"
              alt="Photo"
              className="rounded-md"
              width={256}
              height={256}
            />
          </Link>
        </div>
        <div className="relative">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/p/Cs-LW9aRB8I/"
          >
            <div className="absolute h-full w-full rounded-md hover:bg-black hover:opacity-30"></div>
            <Image
              src="/photos/4.jpg"
              alt="Photo"
              className="rounded-md"
              width={256}
              height={256}
            />
          </Link>
        </div>
        <div className="relative">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/p/Cs-LLOfxC1s/"
          >
            <div className="absolute h-full w-full rounded-md hover:bg-black hover:opacity-30"></div>
            <Image
              src="/photos/5.jpg"
              alt="Photo"
              className="rounded-md"
              width={256}
              height={256}
            />
          </Link>
        </div>
        <div className="relative">
          <Link
            className=""
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/p/CpjKrZKr_sq/"
          >
            <div className="absolute h-full w-full rounded-md hover:bg-black hover:opacity-30"></div>
            <Image
              src="/photos/6.jpg"
              alt="Photo"
              className="rounded-md"
              width={256}
              height={256}
            />
          </Link>
        </div>
      </div>
      <div className="border-grey-50 flex justify-stretch rounded-b-md bg-white px-4 pb-4 pt-2">
        <Link
          href="https://www.instagram.com/keep_lifepieces/"
          target="_blank"
          rel="noopener noreferrer"
          className="grow rounded-md bg-[#0095f6] text-center text-white transition hover:bg-[#33aaf8]"
        >
          <span className="text-sm">View full profile on Instagram</span>
        </Link>
      </div>
    </div>
  );
}
