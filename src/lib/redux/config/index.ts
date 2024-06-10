import { configureStore } from "@reduxjs/toolkit";
import { middleware } from "../middleware";
import { reducer } from "../reducer";

export const config = configureStore({
  reducer,
  middleware,
});
