import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlice";
import postReducer from "../slices/postSlice";
import { loggerMiddleware } from "../middleware/loggerMiddleware";

export const store = configureStore({
    reducer: { todo: todoReducer, post: postReducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware),
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
