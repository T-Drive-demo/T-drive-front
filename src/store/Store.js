import { configureStore } from "@reduxjs/toolkit";
import userReducer from "store/UserSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      serializableCheck: false,
    });

    return middleware;
  },
});
