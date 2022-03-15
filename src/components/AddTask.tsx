import React from 'react'
import styled from 'styled-components';
import StyledFlex from '../styled/StyledFlex';


const StyledAddTaskContainer = styled(StyledFlex)`
  padding: 20px 0px;
`

const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 60%;
  height: 30px;
  font-size: 14px;
  padding-left: 10px;
`

const StyledButton = styled.button`
  border: 2px dotted #a9a9a9;
  padding: 0px 20px;
  outline: none;
  background: transparent;
  margin-right: 10px;
  color: white;
  cursor: pointer;
  transition: 1s;

  &:hover {
    border: 2px dotted #284bb7;
  }
`;


const AddTask = ({ addTodo, todos}: any) => {
  const colorTask = React.useRef<HTMLInputElement>(null);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    addTodo(inputRef.current!.value, todos.length + 1, colorTask.current!.value);
  };

  return (
    <StyledAddTaskContainer justify="space-between" items="center">
      <StyledInput type="text" ref={inputRef} />
      <StyledFlex direction="column" items="center">
        <p>Выберите цвет:</p>
        <input type="color" ref={colorTask} />
      </StyledFlex>
      <StyledButton onClick={() => handleClick()}>Добавить</StyledButton>
    </StyledAddTaskContainer>
  );
};

export default AddTask