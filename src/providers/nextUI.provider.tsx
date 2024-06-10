import { NextUIProvider as UIProvider } from "@nextui-org/react"
import { PropsWithChildren } from "react"

export const NextUIProvider = ({ children }: PropsWithChildren) => {
  return <UIProvider>{children}</UIProvider>
}
