import type { ComponentProps } from "react";
import { Child } from "./Child";

type CustomButtonProps = {
  outline?: boolean;
} & ComponentProps<"button"> &
  ComponentProps<typeof Child>;

const CustomButton = ({ outline, ...props }: CustomButtonProps) => {
  // console.log(props);
  return (
    <button
      style={{ border: outline ? "1px solid red" : undefined }}
      {...props}
    ></button>
  );
};

export default CustomButton;
