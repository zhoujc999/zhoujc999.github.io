import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="flex w-96 flex-col border border-solid border-[#52414c]">
      <div className="flex flex-row items-center justify-between border-b-2 bg-slate-50 px-4 pb-2 pt-4">
        <div className="flex flex-row gap-4">
          <div className="flex-none">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/keep_lifepieces/"
            >
              <Image
                src="https://dummyimage.com/320x320.jpg"
                alt="Logo"
                className="rounded-full border border-[#e6dfd8]"
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
            <Image src="/instagram.png" alt="Logo" width={32} height={32} />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-1 bg-slate-50 p-4">
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/keep_lifepieces/"
          >
            <Image
              src="https://dummyimage.com/320x320.jpg"
              alt="Logo"
              className="rounded-md border border-[#e6dfd8]"
              width={256}
              height={256}
            />
          </Link>
        </div>
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/keep_lifepieces/"
          >
            <Image
              src="https://dummyimage.com/320x320.jpg"
              alt="Logo"
              className="rounded-md border border-[#e6dfd8]"
              width={256}
              height={256}
            />
          </Link>
        </div>
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/keep_lifepieces/"
          >
            <Image
              src="https://dummyimage.com/320x320.jpg"
              alt="Logo"
              className="rounded-md border border-[#e6dfd8]"
              width={256}
              height={256}
            />
          </Link>
        </div>
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/keep_lifepieces/"
          >
            <Image
              src="https://dummyimage.com/320x320.jpg"
              alt="Logo"
              className="rounded-md border border-[#e6dfd8]"
              width={256}
              height={256}
            />
          </Link>
        </div>
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/keep_lifepieces/"
          >
            <Image
              src="https://dummyimage.com/320x320.jpg"
              alt="Logo"
              className="rounded-md border border-[#e6dfd8]"
              width={256}
              height={256}
            />
          </Link>
        </div>
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/keep_lifepieces/"
          >
            <Image
              src="https://dummyimage.com/320x320.jpg"
              alt="Logo"
              className="rounded-md border border-[#e6dfd8]"
              width={256}
              height={256}
            />
          </Link>
        </div>
      </div>
      <div className="border-grey-50 flex justify-stretch border-t-2 bg-slate-50 px-4 pb-4 pt-2">
        <Link
          href="https://www.instagram.com/keep_lifepieces/"
          target="_blank"
          rel="noopener noreferrer"
          className="grow rounded-md bg-[#0095f6] text-center text-slate-50"
        >
          View full profile on Instagram
        </Link>
      </div>
    </div>
  );
}
