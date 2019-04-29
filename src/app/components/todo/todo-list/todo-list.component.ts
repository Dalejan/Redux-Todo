import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from 'src/app/app.redurers';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Todo } from 'src/app/models/todo.model';
import * as fromFilter from '../../../ngrx/filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit, OnDestroy {

  public todos: Todo[] = [];
  public filter: fromFilter.validFilters;
  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(takeUntil(this.unsubscribe$)).subscribe(state => {
      this.todos = state.todos;
      this.filter = state.filter;
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
