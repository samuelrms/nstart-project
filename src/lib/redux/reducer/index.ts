import { ConfigureStoreOptions } from "@reduxjs/toolkit";
import { apiServiceRedux } from "../api";
import { userReducer } from "../slice";

/**
 * TODO - Add your slices here
 */
export const reducer: ConfigureStoreOptions["reducer"] = {
  [apiServiceRedux.reducerPath]: apiServiceRedux.reducer,
  user: userReducer,
};
