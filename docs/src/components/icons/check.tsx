import type { SVGProps } from "react";

interface CheckIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export const CheckIcon = ({ className, ...props }: CheckIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1.25em"
    height="1.25em"
    fill="none"
    className={className}
    aria-hidden={true}
    {...props}
  >
    <path
      d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);
