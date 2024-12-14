import React from "react";
import { Input } from "@nextui-org/input";
import CameraIcon from "../../app/assets/icons/Vector.svg";
import Image from "next/image";

const CameraInput = () => {
  return (
    <div className="flex">
      <label
        htmlFor="file-upload"
        className="relative cursor-pointer w-[77px] h-[78px] gap-1 text-[#80808E] bg-[#F2F3F5] text-[10px] font-[400] flex flex-col justify-center items-center rounded-[6px]"
      >
        <Image
          src={CameraIcon}
          className="w-[13px] h-[12px]"
          alt={"cameraImg"}
        />
        <span>사진 첨부</span>
        <input
          id="file-upload"
          name="file-upload"
          type="file"
          className="sr-only"
        />
      </label>
    </div>
  );
};

export default CameraInput;
