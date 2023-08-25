import { Task } from './../task.model';
import { Component } from '@angular/core';
import { addTask } from '../taskSlice';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-task-form',
  template: `
  <form (submit)="onSubmit()">
      <!-- ... form to add tasks ... -->
      <button type="submit">Add Task</button>
    </form>
  `,
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  constructor(private store: Store) {}

  onSubmit() {
    const newTask: Task = {
      id: 1, // pеальное значение
      name: 'New Task', // реальное значение
      description: 'Description of the new task' // реальное значение
    };
    this.store.dispatch(addTask(newTask));
  }
}
