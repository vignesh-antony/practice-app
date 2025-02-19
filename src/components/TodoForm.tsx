import { FC, useReducer } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { AppDispatch } from "../store";
import { addTodo } from "../slices/todoSlice";

const StyledTodoForm = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    input,
    textarea {
        padding: 12px;
        resize: none;
    }
    button {
        padding: 4px 12px;
        cursor: pointer;
    }
`;

const INITIAL_TODO_TASK_STATE = {
    title: "",
    description: "",
};

type InitialTaskStateType = typeof INITIAL_TODO_TASK_STATE;

const todoFormReducer = (
    state: InitialTaskStateType,
    action: { type: string; payload?: Partial<InitialTaskStateType> }
): InitialTaskStateType => {
    switch (action?.type) {
        case "CHANGE_TITLE": {
            return {
                ...state,
                title: action.payload?.title ?? "",
            };
        }
        case "CHANGE_DESCRIPTION": {
            return {
                ...state,
                description: action.payload?.description ?? "",
            };
        }
        case "RESET": {
            return INITIAL_TODO_TASK_STATE;
        }
        default: {
            return state;
        }
    }
};

const TodoForm: FC = () => {
    const dispatchRedux = useDispatch<AppDispatch>();

    const [state, dispatch] = useReducer(
        todoFormReducer,
        INITIAL_TODO_TASK_STATE
    );

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: "CHANGE_TITLE",
            payload: { title: event?.target?.value ?? "" },
        });
    };

    const handleDescChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        dispatch({
            type: "CHANGE_DESCRIPTION",
            payload: { description: event?.target?.value ?? "" },
        });
    };

    const handleAddTodoTask = () => {
        dispatchRedux(
            addTodo({
                id: crypto.randomUUID(),
                title: state.title,
                description: state.description,
                createdAt: new Date().toISOString(),
                markAsCompleted: false,
            })
        );
        dispatch({ type: "RESET" });
    };

    return (
        <StyledTodoForm>
            <h4>Add Todo Task Form</h4>
            <input
                name="title"
                value={state?.title}
                placeholder="Enter task title"
                onChange={handleInputChange}
            />
            <textarea
                name="description"
                value={state?.description}
                placeholder="Enter task description"
                onChange={handleDescChange}
                rows={3}
            />
            <div>
                <button disabled={!state?.title} onClick={handleAddTodoTask}>
                    Add task
                </button>
            </div>
        </StyledTodoForm>
    );
};

export default TodoForm;
