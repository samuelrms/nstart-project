import { ConfigureStoreOptions } from "@reduxjs/toolkit";
import { apiServiceRedux } from "../api";

/**
 * TODO - Add your slices here
 */
export const reducer: ConfigureStoreOptions["reducer"] = {
  [apiServiceRedux.reducerPath]: apiServiceRedux.reducer,
};
