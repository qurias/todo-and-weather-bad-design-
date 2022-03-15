import React from 'react'
import styled from 'styled-components';
import { ITodo } from '../models/ITodo';
import StyledFlex from '../styled/StyledFlex';

interface Task {
  background?: string;
}

const StyledTask = styled(StyledFlex)<Task>`
  padding: 10px 10px;
  background: ${(props) => props.background};
  box-shadow: 2px 2px 2px ${(props) => props.background};
  margin: 10px 0px;
`;

const StyledButton = styled.div`
  border: none;
  cursor: pointer;
`;

const StyledContainer = styled(StyledFlex)`
  flex: 1;
`;

const StyledContainerEmpty = styled(StyledFlex)`
  flex: 1;
`;

const Tasks = ({ deleteTodo, todos, dispatch }: any) => {
  const handleClickDelete = (e: any) => {
    deleteTodo(
      e.target.parentNode.innerText.substr(
        0,
        e.target.parentNode.innerText.length - 3
      ),
      e.target.id
    )
  };


  return (
    <StyledContainer direction="column">
      {!!todos.length ? (
        todos.map((elem: ITodo, index: number) => (
          <StyledTask
            justify="space-between"
            key={index}
            background={elem.color}
          >
            <p>{elem.value}</p>
            <StyledButton onClick={handleClickDelete} id={elem.id}>
              X
            </StyledButton>
          </StyledTask>
        ))
      ) : (
        <StyledContainerEmpty justify="center" items="center">
          <h1>Добавь свое первое ТуДу! 🎪</h1>
        </StyledContainerEmpty>
      )}
    </StyledContainer>
  );
};

export default Tasks