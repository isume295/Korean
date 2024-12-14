import { Button } from "@nextui-org/react";
import { IButton } from "./type";

export const ButtonComponent = ({
  label,
  disabled = true,
  backgroundColor,
  textStyle,
  width,
  ...rest
}: IButton) => {
  return (
    <Button
      disabled={disabled}
      className={`rounded-[6px] py-[12px] px-[14px] ${
        width ? width : "w-full"
      } ${disabled ? "bg-[#ABAFB7]" : backgroundColor} ${textStyle}`}
      {...rest}
    >
      {label}
    </Button>
  );
};
