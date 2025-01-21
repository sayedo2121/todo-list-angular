import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  currentRoute: string;
  constructor(private route:Router) {
    this.currentRoute = window.location.pathname;
  }

  setCurrentRoute = (path: string)=>{
    this.currentRoute = path ;
  }
}
