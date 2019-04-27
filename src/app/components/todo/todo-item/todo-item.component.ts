import { Component, OnInit, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.redurers';
import { ToggleTodoAction, EditTodoAction, DeleteTodoAction } from 'src/app/ngrx/actions/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit, OnDestroy {

  @Input() public todo: Todo;
  public checkField: FormControl;
  public textField: FormControl;
  public isEditing: boolean;

  @ViewChild('txtEl') txtEl: ElementRef;

  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkField = new FormControl(this.todo.completed);
    this.textField = new FormControl(this.todo.text, Validators.required);

    this.checkField.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(val => {
      const action = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(action)
    });
  }

  public edit() {
    this.isEditing = true;
    setTimeout(() => {
      this.txtEl.nativeElement.select();
    }, 1)
  }

  public endEdit() {
    this.isEditing = false;
    if (this.textField.invalid) {
      return;
    }
    if (this.textField.value === this.todo.text) {
      return;
    }
    const action = new EditTodoAction(this.todo.id, this.textField.value);
    this.store.dispatch(action);
  }

  public onDelete() {
    const action = new DeleteTodoAction(this.todo.id);
    this.store.dispatch(action);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
