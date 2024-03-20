import { cn } from "@/lib/cn";
import Link from "next/link";
import { GoHash } from "react-icons/go";
export default function H2({
  children,
  href,
  ...props
}: {
  children: React.ReactNode;
  href: string;
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <Link
      id={href.substring(1)}
      href={href}
      scroll={false}
      className={cn(
        "group flex items-center justify-start gap-3 py-2",
        props.className,
      )}
      {...props}
    >
      <h2 className=" break-all text-xl font-bold tracking-wider xs:text-2xl sm:text-3xl">
        {children}
      </h2>
      <GoHash className="text-xl opacity-60 transition-opacity group-hover:opacity-100" />
    </Link>
  );
}
