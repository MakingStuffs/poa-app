import authReducer from "store/reducers/authReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Ensure the root state is always corresponding to this implementation of redux
export type RootState = ReturnType<typeof store.getState>;

// Ensure our dispatch is also always corresponding to this implementation
export type AppDispatch = typeof store.dispatch;
