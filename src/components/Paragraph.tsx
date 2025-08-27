import React from "react";
import clsx from "clsx";

// Define your design system variants
type ParagraphVariant =
  | "body"     // default text
  | "lead"     // larger, intro text
  | "muted"    // lighter, secondary text
  | "small"    // small text
  | "tiny";    // extra small text

interface ParagraphProps {
  variant?: ParagraphVariant;
  children: React.ReactNode;
  className?: string;
}

// Map each variant to styles
const variantMap: Record<ParagraphVariant, string> = {
  body: "text-sm lg:text-base leading-relaxed text-gray-900",
  lead: "text-lg font-regular leading-relaxed text-gray-900",
  muted: "text-base leading-relaxed text-gray-500",
  small: "text-sm leading-snug text-gray-900",
  tiny: "text-xs leading-snug text-gray-600",
};

 const Paragraph: React.FC<ParagraphProps> = ({
  variant = "body",
  children,
  className,
}) => {
  return (
    <p className={clsx(variantMap[variant], className)}>
      {children}
    </p>
  );
};


export default Paragraph
