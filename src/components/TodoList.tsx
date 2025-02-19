import { FC } from "react";
import TodoTask from "./TodoTask";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import styled from "styled-components";

const StyledTodoList = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    row-gap: 12px;

    small {
        color: gray;
    }
    hr {
        margin: 20px 0;
    }
`;

const TodoList: FC = () => {
    const { todos } = useSelector((state: RootState) => state?.todo);

    const activeTasks = todos.filter((todo) => !todo.markAsCompleted);
    const completedTasks = todos.filter((todo) => todo.markAsCompleted);

    return (
        <StyledTodoList>
            <StyledTodoList>
                <small>Active Task List</small>
                {activeTasks.length > 0 ? (
                    activeTasks.map((todo) => (
                        <TodoTask key={todo.id} task={todo} />
                    ))
                ) : (
                    <p>No active tasks 🎯</p>
                )}
                <hr />
                <small>Completed Task List</small>
                {completedTasks.length > 0 ? (
                    completedTasks.map((todo) => (
                        <TodoTask key={todo.id} task={todo} />
                    ))
                ) : (
                    <p>No completed tasks ✅</p>
                )}
            </StyledTodoList>
        </StyledTodoList>
    );
};

export default TodoList;
