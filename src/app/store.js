import { configureStore } from "@reduxjs/toolkit";
import slice from "../feature/slice";

export const store = configureStore({
  reducer: {
    app: slice,
  },
});
