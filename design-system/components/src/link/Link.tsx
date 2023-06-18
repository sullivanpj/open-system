"use client";

import clsx from "clsx";
import { PropsWithBase } from "../types";
import { LinkVariants } from "./Link.types";

export type LinkProps = PropsWithBase<{
  /**
   * The variant style of the link
   */
  variant?: LinkVariants | string;

  onClick?: (Event?: any) => void;
}>;

/**
 * The base Link component used by the Open System repository
 */
export const Link = ({
  className,
  children,
  onClick,
  variant = LinkVariants.PRIMARY,
}: LinkProps) => {
  return (
      <label
        onClick={onClick}
        className={clsx(
          "transition-colors relative w-fit h-fit hover:cursor-pointer",
          {
            "font-body-1 underline":
              variant !== LinkVariants.PLAIN &&
              variant !== LinkVariants.PRIMARY &&
              variant !== LinkVariants.TERTIARY,
          },
          {
            "text-link-2 hover:text-hover-link-2 w-fit link":
              variant === LinkVariants.PRIMARY,
          },
          {
            "text-link-2 underline hover:text-hover-link-2":
              variant === LinkVariants.SECONDARY,
          },
          {
            "text-link-3 hover:text-hover-link-3 link":
              variant === LinkVariants.TERTIARY,
          },
          {
            "text-link-1 hover:text-hover-link-1":
              variant === LinkVariants.QUATERNARY,
          },
          className
        )}>
        {children}
      </label>
  );
};
