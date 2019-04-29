import { Component, OnInit } from '@angular/core';
import { ToggleAllAction } from 'src/app/ngrx/todo/todo.actions';
import { AppState } from 'src/app/app.redurers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  public completed = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  toggleAll() {
    this.completed = !this.completed;
    const action = new ToggleAllAction(this.completed);
    this.store.dispatch(action);
  }
}
