import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./user.types";

const initialState: UserState = {
  isLoading: false,
  name: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    startLoadingLogin(state) {
      state.isLoading = true;
    },
    setUser(state, action: PayloadAction<UserState>) {
      const user = action.payload;
      state.name = user?.name;
      state.email = user?.email;
      state.isLoading = false;
    },
    clearUser(state) {
      state.name = "";
      state.isLoading = false;
      state.email = "";
    },
  },
});

export const { startLoadingLogin, setUser, clearUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
