// Конфигурация хранилища
import { configureStore } from "@reduxjs/toolkit";

// Импорт разреза
import userReducer from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
