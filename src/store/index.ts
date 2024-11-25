import { configureStore } from "@reduxjs/toolkit";
import { anilibriaApi } from "./api";

export const store = configureStore({
  reducer: {
    [anilibriaApi.reducerPath]: anilibriaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(anilibriaApi.middleware),
});

export * from "./hooks";
