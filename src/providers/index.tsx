"use client";

import { DURATION_TOAST, FULL_Z_INDEX } from "@/constants";
import { UserState } from "@/lib";
import { I18nProvider } from "@react-aria/i18n";
import { AppProgressBar } from "next-nprogress-bar";
import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";
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
            <Toaster
              position="top-center"
              reverseOrder={false}
              toastOptions={{
                style: {
                  zIndex: FULL_Z_INDEX,
                },
                success: {
                  duration: DURATION_TOAST,
                  style: {
                    zIndex: FULL_Z_INDEX,
                  },
                },
                error: {
                  duration: DURATION_TOAST,
                  style: {
                    zIndex: FULL_Z_INDEX,
                  },
                },
                loading: {
                  style: {
                    zIndex: FULL_Z_INDEX,
                  },
                },
              }}
            />
            {children}
            <AppProgressBar height="6px" color="#001F3D" shallowRouting />
          </I18nProvider>
        </ReduxProvider>
      </NextUIProvider>
    </NextAuthProvider>
  );
};
