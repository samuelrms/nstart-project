import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

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
  children: React.ReactNode;
}>) {
  const bodyClassName = twMerge("max-w-screen", inter.className);
  const userLogged = await auth();
  return (
    <html lang="pt-BR">
      <body className={bodyClassName}>
        <Providers userLogged={userLogged?.user}>{children}</Providers>
      </body>
    </html>
  );
}
