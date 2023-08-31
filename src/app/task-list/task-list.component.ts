import { Component } from '@angular/core';
import { TaskState } from '../taskSlice';
import { createSelector, select, Store } from '@ngrx/store';

const selectTaskState = (state: {tasks: TaskState }) => state.tasks; // Используйте TaskState

const selectAllTasks = createSelector(
  selectTaskState,
  (taskState) => taskState.tasks 
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
