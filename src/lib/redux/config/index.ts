import { configureStore } from "@reduxjs/toolkit";
import { middleware } from "../middleware";
import { reducer } from "../reducer";

/**
 * ANCHOR - Configuration template, don't change it if you don't know what you're doing
 */
export const config = configureStore({
  reducer,
  middleware,
});
