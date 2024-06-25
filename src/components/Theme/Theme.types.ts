import { SwitchProps } from "@nextui-org/react";

export type ThemeProps = {
  /**
   * Hide Tooltip information about the theme (optional)
   * @default false
   */
  hiddenTooltip?: boolean;

  /**
   * Tooltip text for light theme (optional)
   * @default "Tema Claro"
   */
  lightThemeTextTooltip?: string;

  /**
   * Tooltip text for dark theme (optional)
   * @default "Tema Escuro"
   */
  darkThemeTextTooltip?: string;
} & SwitchProps;

export enum ThemeVariants {
  light = "light",
  dark = "dark",
}
