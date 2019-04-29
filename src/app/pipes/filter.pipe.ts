import { Pipe, PipeTransform } from '@angular/core';
import * as fromFilter from '../ngrx/filter/filter.actions';
import { Todo } from '../models/todo.model';
@Pipe({
  name: 'filter_pipe'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: fromFilter.validFilters): Todo[] {

    switch (filter) {
      case 'completed':
        return todos.filter(item => item.completed);
      case 'pendient':
        return todos.filter(item => !item.completed);
      case 'all':
        return todos;
      default:
        return todos;
    }
  }

}
