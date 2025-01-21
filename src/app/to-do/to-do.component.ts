import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ToDoTaskComponent } from "../to-do-task/to-do-task.component";
import { FormsModule } from '@angular/forms';

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

  constructor(){
    if(window.localStorage.getItem("todos"))
      this.todos = JSON.parse(window.localStorage.getItem("todos")!);
    else{
      this.todos = [
        { id: 1, task: 'Edit website', complete: true },
        { id: 2, task: 'Finalise website logic', complete: false },
      ];
    }
  }

  newTask: string = '';
  editingTodoId: number | null = null;
  editingTask: string = '';

  trackById = (index: number, todo: Todo) => todo.id;

  saveTodos(){
    window.localStorage.setItem("todos", JSON.stringify(this.todos));
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
