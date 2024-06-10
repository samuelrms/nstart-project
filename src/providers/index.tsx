"use client";
import { UserState } from "@/lib";
import { I18nProvider } from "@react-aria/i18n";
import { AppProgressBar } from "next-nprogress-bar";
import { PropsWithChildren } from "react";
import { NextAuthProvider } from "./nextAuth.privider";
import { NextUIProvider } from "./nextUI.provider";
import { ReduxProvider } from "./redux.provider";

export const Providers = ({
  children,
  userLogged,
}: PropsWithChildren<{ userLogged?: UserState | {} }>) => {
  return (
    <NextAuthProvider>
      <NextUIProvider>
        <ReduxProvider userLogged={userLogged}>
          <I18nProvider locale="pt-BR">
            {children}
            <AppProgressBar height="6px" color="#001F3D" shallowRouting />
          </I18nProvider>
        </ReduxProvider>
      </NextUIProvider>
    </NextAuthProvider>
  );
};
