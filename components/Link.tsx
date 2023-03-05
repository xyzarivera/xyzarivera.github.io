import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

const CustomLink = ({href, children}:Props) => {
  return (
    <Link href={href} className="text-primary w-fit underline-slide-in">{children}</Link>
  )
}

export default CustomLink