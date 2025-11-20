import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50";

export function Button({ className = "", type = "button", ...props }: ButtonProps) {
  const classes = `${baseClasses} ${className}`.trim();

  return <button type={type} className={classes} {...props} />;
}
