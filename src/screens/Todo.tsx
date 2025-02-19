import { FC } from "react";
import styled from "styled-components";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const StyledTodoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    padding: 20px;
`;

const StyledTodoContainer = styled.div`
    display: flex;
    column-gap: 20px;
    justify-content: space-between;
`;

const Todo: FC = () => {
    return (
        <StyledTodoWrapper>
            <h3>Todo Application</h3>
            <StyledTodoContainer>
                <TodoList />
                <TodoForm />
            </StyledTodoContainer>
        </StyledTodoWrapper>
    );
};

export default Todo;
