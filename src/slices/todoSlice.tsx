import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoState, TodoType } from "../types/todoTypes";

const initialState: TodoState = {
    todos: [],
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TodoType>) => {
            state.todos.push(action?.payload);
        },
    },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
