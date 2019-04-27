import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.redurers';
import { Store } from '@ngrx/store';
import * as fromTodo from '../../../ngrx/actions/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  public textInput: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onAddTodo() {
    if (this.textInput !== '') {
      console.log(this.textInput)
      const action = new fromTodo.AddTodoAction(this.textInput);
      this.store.dispatch(action);
      this.textInput = '';
    }
  }

}
