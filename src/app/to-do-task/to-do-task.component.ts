import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../to-do/to-do.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-task',
  imports: [NgIf, FormsModule],
  templateUrl: './to-do-task.component.html',
  styleUrl: './to-do-task.component.css'
})
export class ToDoTaskComponent {
  @Input() todo : Todo = {id: 0, task:"", complete: false};
  @Input() todos : Todo[] = []
  @Input() editingTodoId: number | null = null;
  @Input() editingTask: string = '';

  @Output() newTodos = new EventEmitter<Todo[]>();

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.newTodos.emit(this.todos);
  }

  editTodo(id: number) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      this.editingTodoId = id;
      this.editingTask = todo.task;
      this.newTodos.emit(this.todos);
    }
  }

  saveTodo() {
    if (this.editingTodoId !== null) {
      const todo = this.todos.find(todo => todo.id === this.editingTodoId);
      if (todo) {
        todo.task = this.editingTask;
        this.editingTodoId = null;
        this.editingTask = '';
        this.newTodos.emit(this.todos);
      }
    }
  }

  cancelEdit() {
    this.editingTodoId = null;
    this.editingTask = '';
  }

  toggleComplete(id: number){
    const todo = this.todos.find(todo => todo.id === id);
    if(todo){
      todo.complete = ! todo.complete;
      this.newTodos.emit(this.todos);
    }
  }
}
