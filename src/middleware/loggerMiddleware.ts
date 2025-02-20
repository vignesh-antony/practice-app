import { Middleware } from "@reduxjs/toolkit";

export const loggerMiddleware: Middleware = (store) => (next) => (action) => {
    console.log("Listening via middleware 📌");
    const result = next(action);
    console.log("Exiting from middleware 👋");
    return result;
};
