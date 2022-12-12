import NextLink from "next/link";

export interface GlobalHeaderLinkProps {
  children: string;
  href: string;
}
export function Link({ href, children }: GlobalHeaderLinkProps) {
  return (
    <div className="text-sm font-bold leading-8">
      <NextLink href={href}>{children}</NextLink>
    </div>
  );
}
