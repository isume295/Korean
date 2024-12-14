import { Input } from "@nextui-org/input";
import React from "react";
import { IInput } from "./type";

const TextInput = ({ label, type, width, placeholder, ...rest }: IInput) => {
  return (
    <div className={`flex flex-col gap-2 ${width}`}>
      {label && (
        <label className="text-black text-[16px] font-semibold">{label}</label>
      )}
      <Input
        classNames={{
          mainWrapper: `${width ? width : "w-full"} max-w-[400px]`,
          input:
            "placeholder:text-[#ABAFB7] placeholder:text-[13px] px-[0px] py-[12px]",
          label: "text-gray-500",
          inputWrapper: "border-1 border-[#E4E5EA] bg-white rounded-[8px]",
        }}
        placeholder={placeholder}
        type={type}
        {...rest}
      />
    </div>
  );
};

export default TextInput;
