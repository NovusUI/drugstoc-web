import React from "react";
import clsx from "clsx";

// Variants you define for your design system
type HeaderVariant =
  | "title"     // maps to h1
  | "subtitle"  // maps to h2
  | "section"   // maps to h3
  | "subsection"// maps to h4
  | "small"     // maps to h5
  | "tiny";     // maps to h6

interface HeaderProps {
  variant?: HeaderVariant;
  children: React.ReactNode;
  className?: string;
}

// Map your variants to a semantic tag + styles
const variantMap: Record<
  HeaderVariant,
  { tag: keyof JSX.IntrinsicElements; styles: string }
> = {
  title:      { tag: "h1", styles: "text-2zl lg:text-4xl xl:text-5xl font-medium" },
  subtitle:   { tag: "h2", styles: "text-3xl font-medium" },
  section:    { tag: "h3", styles: "text-2xl font-medium" },
  subsection: { tag: "h4", styles: "text-xl font-medium" },
  small:      { tag: "h5", styles: "text-lg font-medium" },
  tiny:       { tag: "h6", styles: "text-base font-medium" },
};

 const Header: React.FC<HeaderProps> = ({
  variant = "title",
  children,
  className,
}) => {
  const { tag: Tag, styles } = variantMap[variant];

  return <Tag className={clsx(styles, className)}>{children}</Tag>;
};

export default Header
