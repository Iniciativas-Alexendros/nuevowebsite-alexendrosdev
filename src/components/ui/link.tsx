import NextLink from "next/link";
import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants, type ButtonSize, type ButtonVariant } from "@/components/ui/button";

const inlineClasses =
  "text-link underline underline-offset-4 transition-colors hover:text-link-hover";

export type LinkVariant = "inline" | ButtonVariant;

export type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  variant?: LinkVariant;
  size?: ButtonSize;
};

/** Protocolos que DEBEN usar <a> nativo (no NextLink). */
export function isNativeProtocolHref(href: string): boolean {
  return /^(mailto|tel|sms):/i.test(href);
}

export function Link({
  href,
  variant = "inline",
  size = "md",
  className,
  target,
  rel,
  children,
  ...props
}: LinkProps) {
  const isExternal = /^https?:\/\//i.test(href);
  const isNativeProtocol = isNativeProtocolHref(href);
  const classes =
    variant === "inline"
      ? cn(inlineClasses, className)
      : buttonVariants({ variant, size, className });
  const opensInNewTab = target === "_blank" || isExternal;

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target={target ?? "_blank"}
        rel={rel ?? "noopener noreferrer"}
        {...props}
      >
        {children}
        {opensInNewTab ? <span className="sr-only">(abre en una pestaña nueva)</span> : null}
      </a>
    );
  }

  if (isNativeProtocol) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={classes} target={target} rel={rel} {...props}>
      {children}
    </NextLink>
  );
}
