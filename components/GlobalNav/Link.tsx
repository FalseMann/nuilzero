export interface GlobalNavLinkProps {
  children: string;
  href: string;
}

export function Link({ children }: GlobalNavLinkProps) {
  return (
    <div className="text-sm font-bold leading-8">
      <a href="">{children}</a>
    </div>
  );
}
