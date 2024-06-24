"use client";

import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Stack } from "../Stack";
import { OTPProps } from "./OTP.types";

export const OTP = ({
  length = 6,
  onComplete,
  inputHeight = "h-12",
  inputWidth = "w-12",
  spacing = "gap-4",
  bg = "bg-white",
  fontColor = "text-black",
  ...inputProps
}: OTPProps) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const classNameInput = twMerge(
    "text-center border border-gray-300 rounded-md focus:ring-2 focus:primary-500 focus:outline-none focus:border-transparent",
    inputHeight,
    inputWidth,
    bg,
    fontColor
  );
  const classContent = twMerge(inputHeight, inputWidth);
  const classContainer = twMerge("flex-row", spacing);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [length]);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const { key } = event;

    // Verify if the key pressed is a digit
    if (/\d/.test(key)) {
      event.preventDefault();
      const newOtp = [...otp];
      newOtp[index] = key;
      setOtp(newOtp);

      // Focus next input
      if (index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      // Call onComplete if OTP is filled
      if (newOtp.join("").length === length) {
        onComplete?.(newOtp.join(""));
      }
    } else if (key === "Backspace") {
      event.preventDefault();
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      // Focus previous input
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    } else if (key === "ArrowRight") {
      // Focus next input
      if (index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    } else if (key === "ArrowLeft") {
      // Focus previous input
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const paste = event.clipboardData.getData("text");
    const pasteArray = paste.split("");
    if (pasteArray.length > length) {
      pasteArray.length = length;
    }
    setOtp(pasteArray);
    if (pasteArray.length === length) {
      onComplete?.(pasteArray.join(""));
    }
  };

  return (
    <Stack className={classContainer}>
      {otp.map((data, index) => (
        <Stack key={index} className={classContent}>
          <input
            value={data}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={index === 0 ? handlePaste : undefined}
            onClick={(e) => e.stopPropagation()}
            ref={(ref) => {
              inputRefs.current[index] = ref;
            }}
            className={classNameInput}
            {...inputProps}
          />
        </Stack>
      ))}
    </Stack>
  );
};
