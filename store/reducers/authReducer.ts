import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { authInitialState } from "store/state/authInitialState";
import { AuthenticationState, User, UserIdentifier } from "types";

// Create our state slice
export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    setUser: (
      state: AuthenticationState = authInitialState,
      action: PayloadAction<User>
    ) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      return state;
    },
    clearUser: (state: AuthenticationState = authInitialState) => {
      return state;
    },
  },
});

// Export our actions to use with dispatcher
export const { setUser, clearUser } = authSlice.actions;

// Export pre typed selector so we dont have to type the selector every time we use it
export const selectAuth = (state: RootState) => state.auth;

// Export our reducer as the default
export default authSlice.reducer;
