import Link from "next/link";
import { GoHash } from "react-icons/go";
export default function H2({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      id={href.substring(1)}
      href={href}
      scroll={false}
      className="group flex items-center justify-start gap-3"
    >
      <h2 className=" break-all text-xl font-bold tracking-wider xs:text-2xl sm:text-3xl">
        {children}
      </h2>
      <GoHash className="text-xl opacity-60 transition-opacity group-hover:opacity-100" />
    </Link>
  );
}
