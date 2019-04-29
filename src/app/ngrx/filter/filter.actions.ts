import { Action } from '@ngrx/store';

export const SET_FILTER = '[FILTEr] set filter';

export type validFilters = 'all' | 'completed' | 'pendient';
export class SetFilterAction implements Action {
  readonly type = SET_FILTER;

  constructor(public filter: validFilters) { }
}

export type Actions = SetFilterAction;
