import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { IconButton } from "./iconButton";
import { Input, InputProps } from "./input";

type InputContainerProps = InputProps & {
  leftIcon?: React.ReactNode;
};

export function InputContainer(props: InputContainerProps) {
  const { leftIcon, ...inputProps } = props;

  const [shouldShowPassword, setShowShowPassword] = useState(false);

  const handleEyeClick = () => {
    setShowShowPassword((oldValue) => !oldValue);
  };

  return (
    <div className="flex w-full flex-col text-gray-300 transition-colors focus-within:text-primary">
      <div className="flex w-full border-b border-gray-200 py-3.5 transition focus-within:border-gray-400">
        {leftIcon && <div className="mr-2">{leftIcon}</div>}
        <Input className="flex flex-1" shouldShowPassword={shouldShowPassword} {...inputProps} />
        {inputProps.type === "password" && !inputProps.disabled && (
          <IconButton variant="link" className="ml-2 text-gray-300" onClick={handleEyeClick}>
            {shouldShowPassword ? <EyeOff /> : <Eye />}
          </IconButton>
        )}
      </div>
    </div>
  );
}
