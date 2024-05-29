import { ComponentPropsWithoutRef, ElementType } from "react";

const DEFAULT_TYPE = "button";

type TButton<T extends ElementType> = {
  As?: T;
} & ComponentPropsWithoutRef<T>;

function Button<T extends ElementType = typeof DEFAULT_TYPE>({
  As,
  ...props
}: TButton<T>) {
  const Component = As ?? DEFAULT_TYPE;
  return <Component {...props} />;
}

export default Button;
