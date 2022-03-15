import axios from "axios";
import { Dispatch } from "react";
import { ITodo } from "../../models/ITodo";
import { ITodos } from '../../models/ITodo';

export const fetchTodos = (todos: ITodos[]) => ({
  type: "TODO_FETCH",
  payload: todos
})

export const deleteTodo = (todo: ITodo, id: number) => {
  axios.delete(`http://localhost:3001/todos/${id}`)
  
  return {       
    type: 'TODO_DELETE',
    payload: todo,
  }    
};

export const addTodo = (todo: string, id: string, color: string) => {

  const tempTodo: ITodo = {
    id: id,
    value: todo,
    color: color,
  };

  axios.post<ITodo>(`http://localhost:3001/todos/`, tempTodo);

  return {
    type: 'TODO_ADD',
    payload: tempTodo,
  };
};
