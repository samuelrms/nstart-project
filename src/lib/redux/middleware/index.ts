import { ConfigureStoreOptions } from "@reduxjs/toolkit";
import { apiServiceRedux } from "../api";

/**
 * ANCHOR - Configuration template, don't change it if you don't know what you're doing
 */
export const middleware: ConfigureStoreOptions["middleware"] = (
  getDefaultMiddleware
) => getDefaultMiddleware().concat(apiServiceRedux.middleware);
