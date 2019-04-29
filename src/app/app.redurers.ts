import { Todo } from './models/todo.model';
import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import * as fromTodo from './ngrx/todo/todo.reducer';
import * as fromFilter from './ngrx/filter/filter.reducer';
import * as fromFilterActions from './ngrx/filter/filter.actions';
export interface AppState {
  todos: Todo[];
  filter: fromFilterActions.validFilters;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filter: fromFilter.filterReducer,
}
