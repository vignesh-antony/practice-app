import { FC, useMemo } from "react";
import { TodoType } from "../types/todoTypes";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { markTaskAsCompleted, removeTodo } from "../slices/todoSlice";

interface TodoTaskProps {
    task: TodoType;
}

const StyledTodoTask = styled.div`
    padding: 12px;
    border: 1px solid #dddddd;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledTodoInfo = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 4px;
`;

const StyledTodoAction = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
    button {
        padding: 16px;
        width: 24px;
        height: 24px;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        cursor: pointer;
        font-weight: bold;

        &.delete-btn {
            background-color: #ff9595;
        }
        &.completed-btn {
            background-color: #95ffb3;
        }
    }
`;

const TodoTask: FC<TodoTaskProps> = ({ task }) => {
    const dispatch = useDispatch<AppDispatch>();

    const formattedDate = useMemo(
        () => new Date(task?.createdAt ?? "")?.toLocaleDateString("en-IN"),
        [task?.createdAt]
    );

    const handleDeleteTask = () => {
        dispatch(removeTodo({ id: task?.id }));
    };

    const handleMarkAsCompleted = () => {
        dispatch(markTaskAsCompleted({ id: task?.id }));
    };

    return (
        <StyledTodoTask>
            <StyledTodoInfo>
                <b>{task?.title}</b>
                <small>{task?.description}</small>
            </StyledTodoInfo>
            <StyledTodoAction>
                <p>{formattedDate}</p>
                {!task?.markAsCompleted && (
                    <button
                        onClick={handleMarkAsCompleted}
                        type="button"
                        title="Mark task as completed"
                        className="completed-btn"
                    >
                        &#x2713;
                    </button>
                )}
                <button
                    onClick={handleDeleteTask}
                    type="button"
                    title="Delete task"
                    className="delete-btn"
                >
                    &#x2715;
                </button>
            </StyledTodoAction>
        </StyledTodoTask>
    );
};

export default TodoTask;
