import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { authInitialState } from "state";

// Create our state slice
export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    isAuthenticated: (state, action: PayloadAction<any>) => {},
    setUser: (state, action: PayloadAction<any>) => {},
    user: (state, action: PayloadAction<any>) => {},
  },
});

// Export our actions to use with dispatcher
export const { isAuthenticated, setUser, user } = authSlice.actions;

// Export pre typed selector so we dont have to type the selector every time we use it
export const selectAuth = (state: RootState) => state.auth;

// Export our reducer as the default
export default authSlice.reducer;
