import { Component } from '@angular/core';
import AppState from '../taskSlice';
import { createSelector, select, Store } from '@ngrx/store';
import { TaskState } from '../taskSlice';

const selectTaskState = (state: AppState) => state.tasks;

const selectAllTasks = createSelector(
  selectTaskState,
  (taskState: TaskState) => taskState.tasks
);

@Component({
  selector: 'app-task-list',
  template: `
    <div *ngFor="let task of tasks$ | async">
      {{ task.name }}
    </div>
  `
})
export class TaskListComponent {
  tasks$ = this.store.pipe(select(selectAllTasks));

  constructor(private store: Store) {}
}