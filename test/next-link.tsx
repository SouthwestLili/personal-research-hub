import type { AnchorHTMLAttributes, ReactNode } from 'react';

export default function TestLink({
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { children?: ReactNode }) {
  return <a {...props}>{children}</a>;
}
