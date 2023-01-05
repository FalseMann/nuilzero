import NextLink from "next/link";

export interface GlobalHeaderLinkProps {
  children: string;
  className?: string;
  href: string;
}
export function Link({ href, children, className }: GlobalHeaderLinkProps) {
  return (
    <div className="font-bold">
      <NextLink href={href} className={className}>
        {children}
      </NextLink>
    </div>
  );
}
