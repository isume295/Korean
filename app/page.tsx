"use client";
import { ButtonComponent } from "@/components/button/Button";
import CameraInput from "@/components/cameraInput/CameraInput";
import DatePickerComponent from "@/components/datePicker/DatePicker";
import InputComponent from "@/components/input/Input";
import Modals from "@/components/modals/Modals";
import React from "react";
export default function Home() {
  return (
    <div className="bg-gray-500 min-h-[100vh] w-full flex flex-col gap-5 justify-center items-center">
      <InputComponent
        type={"email"}
        placeholder="휴대폰번호 입력"
        width="w-full"
        // label="휴대폰번호"
      />
      <ButtonComponent
        label="인증번호 받기"
        backgroundColor="bg-red-500"
        textStyle="text-white text-[13px]"
      />
      <DatePickerComponent />
      <CameraInput />
      <Modals
        title={"앱 접근 권한 안내"}
        description="모든 대화 내용이 삭제 됩니다."
        primayButton={"button"}
      />
    </div>
  );
}
