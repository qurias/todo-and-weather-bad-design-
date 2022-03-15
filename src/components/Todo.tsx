import React from 'react'
import StyledFlex from '../styled/StyledFlex'
import Tasks from './Tasks'
import styled from "styled-components"
import AddTask from './AddTask'
import Options from './Options'
import axios from 'axios'
import { useActions } from '../hooks/UseAction'
import { useDispatch } from 'react-redux'
import useTypeSelector from '../hooks/UseTypeSelector'
import { IColor } from '../models/IColor'

interface TodoContainer {
  colorBackground : string;
}

const StyledTitle = styled.h2`
  font-size: 25px;
  padding-bottom: 20px;
`

const StyledTodoContainer = styled(StyledFlex)<TodoContainer>`
  padding: 30px;
  width: 35%;
  min-height: 800px;
  margin-top: 50px;
  background: ${(props) => props.colorBackground};
  color: white;
  position: relative;
`;

const Todo = () => {

  const actions = useActions();
  //@ts-ignore
  const todos = useTypeSelector((state) => state.todo.todos);

  const color: IColor = useTypeSelector((state) => state.color);
  // const [todos, setTodos] = React.useState<ITodo[]>([]);

  // let colorAppStorage : any;

  // let store : string[] | undefined;

  // localStorage.tasks == false
  //   ? store = []
  //   : (store = localStorage.getItem('tasks')?.split(','));


  // const [tasks, setTasks] = React.useState<string[] | undefined>(store);

  // localStorage.colorApp == false
  //   ? (colorAppStorage = '#7589e7')
  //   : (colorAppStorage = localStorage.getItem('colorApp'))

  React.useEffect(() => {
    axios
      .get('http://localhost:3001/todos')
      .then((response) =>  { 
        actions.fetchTodos(response.data);
      });
  }, [])

  React.useEffect(() => {
    axios.get('http://localhost:3001/colors').then((response) => {
      actions.setColorApp(response.data.colorApp);
    });
  }, []);

  return (
    <StyledTodoContainer
      direction="column"
      colorBackground={color.color.colorApp}
    >
      <StyledFlex justify="space-between" items="center">
        <StyledTitle>Todo</StyledTitle>
        <Options
          setColorAppState={actions.setColorApp}
          setColorApp={actions.setColorApp}
        />
      </StyledFlex>
      <AddTask todos={todos} addTodo={actions.addTodo} />
      <Tasks todos={todos} deleteTodo={actions.deleteTodo} />
    </StyledTodoContainer>
  );
}

export default Todo