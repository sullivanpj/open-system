import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { PropsWithBase } from "../types";

export type LinkProps = PropsWithBase<
  Omit<NextLinkProps, "href"> & Partial<Pick<NextLinkProps, "href">>
>;

/**
 * A component to facilitate application navigation. This is essentially a wrapper
 * around the NextJS Link component.
 */
export function Link({ children, href = "/", ...props }: LinkProps) {
  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  );
}
