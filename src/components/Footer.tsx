import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-mpwr-footer py-12 text-center text-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <Image
          src="/images/logo.png"
          alt="MPWR Capital"
          width={80}
          height={66}
          className="mx-auto mb-4 h-auto w-[80px] brightness-0 invert"
        />
        <a
          href="mailto:info@mpwrcap.com"
          className="mb-4 block text-sm font-semibold hover:text-mpwr-red transition-colors"
        >
          info@mpwrcap.com
        </a>
        <p className="text-xs text-gray-400">
          Copyright: &copy; {new Date().getFullYear()} MPWR CAPITAL. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
