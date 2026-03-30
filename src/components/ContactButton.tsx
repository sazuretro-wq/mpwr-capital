import Link from "next/link";

interface ContactButtonProps {
  label?: string;
}

export default function ContactButton({
  label = "CONTACT US",
}: ContactButtonProps) {
  return (
    <div className="mt-10 flex justify-center">
      <Link
        href="/contact"
        className="inline-block rounded bg-mpwr-red px-10 py-3 text-sm font-bold tracking-wide text-white uppercase transition-colors hover:bg-mpwr-red-hover"
      >
        {label}
      </Link>
    </div>
  );
}
