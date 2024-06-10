"use client";

import { AppStore, UserState, makeStore, setUser } from "@/lib";
import { useRef } from "react";
import { Provider } from "react-redux";

export function ReduxProvider({
  children,
  userLogged,
}: {
  children: React.ReactNode;
  userLogged?: UserState | {};
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
    if (userLogged) {
      storeRef.current.dispatch(setUser(userLogged as UserState));
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
