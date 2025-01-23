import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ToDoTaskComponent } from "../to-do-task/to-do-task.component";
import { FormsModule } from '@angular/forms';
import { ToDoServiceService } from '../to-do-service.service';

export interface Todo {
  id: number;
  task: string;
  complete: boolean;
}

@Component({
  selector: 'app-to-do',
  imports: [NgFor, ToDoTaskComponent, FormsModule],
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class TodoComponent {
  todos: Todo[];

  constructor(private ToDoServiceService: ToDoServiceService){
    this.todos = ToDoServiceService.getTodos();
  }

  newTask: string = '';
  editingTodoId: number | null = null;
  editingTask: string = '';

  trackById = (index: number, todo: Todo) => todo.id;

  saveTodos(){
    this.ToDoServiceService.saveTodos(this.todos);
  }

  addTodo() {
    if (this.newTask.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        task: this.newTask,
        complete: false
      };
      this.todos.push(newTodo);
      this.newTask = ''; // Clear input
      this.saveTodos();
    }
  }

  updateTodos(todos :Todo[]){
    this.todos = todos;
    this.saveTodos();
  }
}
