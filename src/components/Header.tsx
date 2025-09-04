/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

// Define header sizes (mapping your design system)
export const headerSizes = {
  supertitle: "tracking-[0rem] text-[2rem] font-medium not-italic md:text-[3.75rem] sm:text-[2.5rem]",
  title: "tracking-[0rem] text-[1.875rem] font-medium not-italic md:text-[2.4rem] lg:text-[3.0rem] sm:text-[2rem]", // h1
  subtitle: "tracking-[0rem] text-[2.25rem] font-medium not-italic sm:text-[1.75rem]", // h2
  section: "tracking-[0rem]  font-medium not-italic text-[1.5rem]", // h3
  subsection: "tracking-[0rem] text-[1.5rem] font-medium not-italic sm:text-[1.25rem]", // h4
  small: "tracking-[0rem] text-[1.25rem] font-medium not-italic sm:text-[1.125rem]", // h5
  tiny: "tracking-[0rem] text-[1rem] font-medium not-italic sm:text-[0.875rem]", // h6
};

export type HeaderVariant = keyof typeof headerSizes;

export type HeaderProps = Partial<{
  className: string;
  color: string;
  as: any; // Optional override for semantic element
  variant: HeaderVariant;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

const Header = React.forwardRef<HTMLElement, React.PropsWithChildren<HeaderProps>>(
  (
    { children, className = "", color = "text-gray-900", as, variant = "title", ...restProps },
    ref
  ) => {
    const Component = as || "h1";

    return (
      <Component
        ref={ref}
        className={`${color} font-montserrat ${className} ${headerSizes[variant]}`}
        {...restProps}
      >
        {children}
      </Component>
    );
  }
);

Header.displayName = "Header";

export { Header };
