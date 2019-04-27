import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo/todo-item/todo-item.component';
import { TodoFooterComponent } from './components/todo/todo-footer/todo-footer.component';
import { TodoAddComponent } from './components/todo/todo-add/todo-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './ngrx/reducer/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFooterComponent,
    TodoAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ todos: todoReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
