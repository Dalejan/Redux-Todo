import { Component, OnInit } from '@angular/core';
import * as fromFilter from '../../../ngrx/filter/filter.actions';
import * as fromTodo from '../../../ngrx/todo/todo.actions';

import { AppState } from 'src/app/app.redurers';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  validFilters: fromFilter.validFilters[] = ['all', 'completed', 'pendient'];
  selectedFilter: fromFilter.validFilters;
  pendients: number;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.selectedFilter = state.filter;
      this.pendients = state.todos.filter(item => !item.completed).length;
    })
  }

  changeFilter(filter: fromFilter.validFilters) {
    const action = new fromFilter.SetFilterAction(filter);
    this.store.dispatch(action)
  }

  deleteCompleted() {
    const action = new fromTodo.DeleteCompletedTodoAction();
    this.store.dispatch(action);
  }

}
