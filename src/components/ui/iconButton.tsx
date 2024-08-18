import { PropsWithChildren } from "react";

import { Button, ButtonProps } from "./button";

export function IconButton(props: PropsWithChildren<ButtonProps>) {
  const { children, ...rest } = props;

  return (
    <Button {...rest} size="icon">
      {children}
    </Button>
  );
}
