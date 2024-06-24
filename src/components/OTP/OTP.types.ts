import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { Height, Spacing, Width } from "./enum";

export type OtpType = {
  otp: string;
};

export type AcceptType = "numbers";

export type OTPProps = {
  /**
   * Number of characters accepted by the OTP
   * @default "6"
   */
  length?: number;

  /**
   * Callback function called when the OTP is filled
   */
  onComplete?: (otp: string) => void;

  /**
   * Props for the input component
   */
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;

  /**
   * Define the height of the input.
   * Refer to Height for possible values and their corresponding sizes.
   */
  inputHeight?: keyof typeof Height;

  /**
   * Define the width of the input.
   * Refer to Width for possible values and their corresponding sizes.
   */
  inputWidth?: keyof typeof Width;

  /**
   * Define the spacing between the input.
   * Refer to Spacing for possible values and their corresponding sizes.
   */
  spacing?: keyof typeof Spacing;

  /**
   * Background color of the input
   * @description background in tailwind format
   * @default "bg-white"
   */
  bg?: string;

  /**
   * Font color of the input
   * @description color in tailwind format
   * @default "text-black"
   */
  fontColor?: string;
};
