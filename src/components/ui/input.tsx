import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  shouldShowPassword?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, shouldShowPassword, ...props }, ref) => {
    const inputType = type === "password" && shouldShowPassword ? "text" : type;

    return (
      <input
        type={inputType}
        className={cn(
          "flex h-5 w-full bg-transparent p-0 text-base/3 text-gray-400 caret-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-base/3 placeholder:text-gray-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
