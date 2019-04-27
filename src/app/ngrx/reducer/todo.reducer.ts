import * as fromTodo from '../actions/todo.actions';
import { Todo } from 'src/app/models/todo.model';

const initialState: Todo[] = [];

export function todoReducer(state = initialState, action: fromTodo.Actions): Todo[] {
  // return state;
  switch (action.type) {
    case fromTodo.ADD_TODO:
      const todo = new Todo(action.text);
      return [...state, todo];
    case fromTodo.TOGGLE_TODO:
      return state.map(item => {
        if (item.id === action.id) {
          return { ...item, completed: !item.completed }
        }
        return item;
      });
    case fromTodo.EDIT_TODO:
      return state.map(item => {
        if (item.id === action.id) {
          return { ...item, text: action.text }
        }
        return item;
      });
    case fromTodo.DELETE_TODO:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}