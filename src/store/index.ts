import { configureStore } from "@reduxjs/toolkit";
import { anilibriaApi } from "./api";

export const store = configureStore({
  reducer: {
    [anilibriaApi.reducerPath]: anilibriaApi.reducer,
  },
});

export * from "./hooks";
