import { InputProps } from "@nextui-org/input";

export interface IInput extends InputProps {
  label?: string;
  type: string;
  width?: string;
  placeholder: string;
}
