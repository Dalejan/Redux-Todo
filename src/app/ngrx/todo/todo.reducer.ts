import * as fromTodo from './todo.actions';
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
    case fromTodo.TOGGLE_COMPLETE_ALL:
      return state.map(item => {
        return { ...item, completed: action.completed }
      });
    case fromTodo.DELETE_COMPLETED:
      return state.filter(item => !item.completed);

    default:
      return state;
  }
}