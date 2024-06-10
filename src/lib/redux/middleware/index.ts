import { ConfigureStoreOptions } from "@reduxjs/toolkit";
import { apiServiceRedux } from "../api";

export const middleware: ConfigureStoreOptions["middleware"] = (
  getDefaultMiddleware
) => getDefaultMiddleware().concat(apiServiceRedux.middleware);
