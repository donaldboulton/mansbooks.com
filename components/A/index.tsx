import { ReactNode } from "react";
import { Link } from "next";

interface AProps {
  href: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
}

export default function A({
  href,
  external = false,
  className,
  children,
}: AProps) {
  if (external) {
    return (
      <a
        key={href}
        href={href}
        className={`text-slate-200 hover:text-fuchsia-600 dark:text-slate-200 ${className}`}
        rel="me"
        target="_blank"
        area-label="Social Link"
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link
        key={href}
        href={href}
        rel="me"
        target="_blank"
        className={`text-slate-200 hover:text-fuchsia-600 dark:text-slate-200 ${className}`}
        activeClassName="active"
      >
        {children}
      </Link>
    );
  }
}
