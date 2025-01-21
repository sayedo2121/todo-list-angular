import { Component } from '@angular/core';
import {TodoComponent } from "../to-do/to-do.component";

@Component({
  selector: 'app-to-do-page',
  imports: [ TodoComponent],
  templateUrl: './to-do-page.component.html',
  styleUrl: './to-do-page.component.css'
})
export class ToDoPageComponent {

}
