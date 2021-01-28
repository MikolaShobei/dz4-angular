import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dz4-angular';
  constructor(private router: Router) {
  }
  onClickUsers(): void {
    this.router.navigate(['users']);
  }
  onClickPosts(): void {
    this.router.navigate(['posts']);
  }
}
