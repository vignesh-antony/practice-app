import { FC } from "react";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todoSlice";

const StyledTodoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    padding: 20px;
`;

const Todo: FC = () => {
    const { todos } = useSelector((state: RootState) => state.todo);
    const dispatch = useDispatch<AppDispatch>();

    const handleAddTodo = () => {
        dispatch(
            addTodo({
                id: "1",
                title: "First todo added automatically",
                createdAt: new Date(),
                markAsCompleted: false,
            })
        );
    };

    return (
        <StyledTodoWrapper>
            <h3>Todo Application</h3>
            {todos?.map((todo) => (
                <div>{todo?.title}</div>
            ))}
            {!todos?.length && <p>No todos!</p>}
            <div>
                <button onClick={handleAddTodo}>Add todo</button>
            </div>
        </StyledTodoWrapper>
    );
};

export default Todo;
