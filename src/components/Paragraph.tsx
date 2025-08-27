/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

// Define paragraph size variants
export const paragraphSizes = {
  body: "tracking-[0rem] text-[1rem] font-normal not-italic leading-relaxed text-gray-900",
  lead: "tracking-[0rem] text-[1.25rem] font-normal not-italic leading-relaxed text-gray-900",
  muted: "tracking-[0rem] text-[1rem] font-normal not-italic leading-relaxed text-gray-500",
  small: "tracking-[0rem] text-[0.875rem] font-normal not-italic leading-snug text-gray-900",
  tiny: "tracking-[0rem] text-[0.75rem] font-normal not-italic leading-snug text-gray-600",
};

export type ParagraphVariant = keyof typeof paragraphSizes;

export type ParagraphProps = Partial<{
  className: string;
  color: string;
  as: any; // allows overriding the tag
  variant: ParagraphVariant;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

const Paragraph = React.forwardRef<HTMLElement, React.PropsWithChildren<ParagraphProps>>(
  (
    { children, className = "", color = "text-gray-900", as, variant = "body", ...restProps },
    ref
  ) => {
    const Component = as || "p";

    return (
      <Component
        ref={ref}
        className={`${color} font-montserrat ${className} ${paragraphSizes[variant]}`}
        {...restProps}
      >
        {children}
      </Component>
    );
  }
);

Paragraph.displayName = "Paragraph";

export { Paragraph };
