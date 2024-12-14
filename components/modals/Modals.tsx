import React from "react";
import { ButtonComponent } from "../button/Button";

const Modals = ({
  title,
  description,
  primayButton,
  secondaryButton,
}: {
  title: string;
  description?: string;
  primayButton: string;
  secondaryButton?: string;
}) => {
  return (
    <div className="w-[350px] h-auto bg-white rounded-[12px] ">
      <div className="flex flex-col justify-center items-center w-full gap-[30px] p-[36px]">
        <div className="flex flex-col w-full gap-1 justify-start items-center">
          <h1 className="text-[20px] text-[#404251] font-[700]">{title}</h1>
          {description && (
            <p className="text-[16px] text-[#80808E] font-[400]">
              {description}
            </p>
          )}
        </div>
        <div className="flex gap-[10px] bottom-0 h-[100px] w-full bg-red-600"></div>
      </div>
    </div>
  );
};

export default Modals;
