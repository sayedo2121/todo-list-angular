import { Injectable } from '@angular/core';

interface Todo{
  id: number;
  task: string;
  complete: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {

  constructor() {
   }

   saveTodos(todos: Todo[]){
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }

  getTodos(){
    let todos;

    if(window.localStorage.getItem("todos"))
      todos = JSON.parse(window.localStorage.getItem("todos")!);
    else{
      todos = [
        { id: 1, task: 'Edit website', complete: true },
        { id: 2, task: 'Finalise website logic', complete: false },
      ];
    }

    return todos;
  }
}
