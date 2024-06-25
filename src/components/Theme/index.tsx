"use client";

import { Switch, Tooltip } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { PiMoonFill, PiSunDimFill } from "react-icons/pi";
import { ThemeProps, ThemeVariants } from "./Theme.types";

export const Theme = ({
  hiddenTooltip = false,
  lightThemeTextTooltip = "Tema Claro",
  darkThemeTextTooltip = "Tema Escuro",
  ...props
}: ThemeProps) => {
  const { theme, setTheme, systemTheme } = useTheme();

  const themeOptions = ThemeVariants;

  useEffect(() => {
    if (!theme && systemTheme) {
      setTheme(systemTheme);
    }
  }, [systemTheme, theme, setTheme]);

  const handleThemeChange = () => {
    setTheme(
      theme === themeOptions.light ? themeOptions.dark : themeOptions.light
    );
  };

  return (
    <Tooltip
      hidden={hiddenTooltip}
      content={
        theme === themeOptions.light
          ? lightThemeTextTooltip
          : darkThemeTextTooltip
      }
    >
      <Switch
        isSelected={theme === themeOptions.light}
        onChange={handleThemeChange}
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <PiSunDimFill className={className} />
          ) : (
            <PiMoonFill className={className} />
          )
        }
        {...props}
      />
    </Tooltip>
  );
};
