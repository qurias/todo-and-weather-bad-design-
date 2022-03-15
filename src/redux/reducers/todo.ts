import { ITodo } from "../../models/ITodo";
import { ITodos } from '../../models/ITodo';

const initialState : ITodos = {
  todos: []
}

const todos = (state = initialState, action: any) => {
  switch (action.type) {
    case 'TODO_FETCH': {
      return {
        ...state,
        todos: action.payload,
      };
    }
    case 'TODO_DELETE': {
      let tempStateTodo = state.todos.filter(
        (elem: ITodo) => elem.value !== action.payload
      );
      return {
        ...state,
        todos: tempStateTodo,
      };
    }
    case 'TODO_ADD': {
      let tempState = [
        ...state.todos,
        { id: state.todos[state.todos.length - 1].id, value: action.payload.value, color: action.payload.color },
      ];
      return {
        ...state,
        todos: tempState,
      };
    }
    default: {
      return state;
    }
  }
}

export default todos;