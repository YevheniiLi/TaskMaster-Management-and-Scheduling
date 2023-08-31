import { Task } from './../task.model';
import { Component } from '@angular/core';
import { addTask } from '../taskSlice';
import { Store } from '@ngrx/store';
import { v4 as uuidv4} from 'uuid';

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

  newTask: Task = {
    id: '',
    name:'',
    description: ''
  };


  onSubmit() {
    const newTask: Task = {
      id: uuidv4(), // Генерация уникального идентификатора
      name: this.newTask.name, // реальное значение
      description: this.newTask.description// реальное значение
    };
    this.store.dispatch(addTask(newTask));
  }
}
