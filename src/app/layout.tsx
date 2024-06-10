import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { twMerge } from "tailwind-merge";

import { DURATION_TOAST, FULL_Z_INDEX } from "@/constants";
import { auth } from "@/lib";
import { Providers } from "@/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boilerplate NStart",
  description: "Create by Samuel Ramos",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const bodyClassName = twMerge("max-w-screen", inter.className);
  const userLogged = await auth();
  return (
    <html lang="pt-BR">
      <body className={bodyClassName}>
        <Providers userLogged={userLogged?.user}>
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
        </Providers>
      </body>
    </html>
  );
}
