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
            state.todos.push(action.payload);
        },
        removeTodo: (state, action: PayloadAction<{ id: string }>) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload.id
            );
        },
        markTaskAsCompleted: (state, action: PayloadAction<{ id: string }>) => {
            const todo = state.todos.find((t) => t.id === action.payload.id);
            if (todo) todo.markAsCompleted = true;
        },
    },
});

export const { addTodo, removeTodo, markTaskAsCompleted } = todoSlice.actions;

export default todoSlice.reducer;
