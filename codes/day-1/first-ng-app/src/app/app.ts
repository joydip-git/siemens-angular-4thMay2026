import { Component } from '@angular/core';
import { Second } from "./second/second";

@Component({
  selector: 'app-root',
  imports: [Second],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //data
  title = 'Welcome to Angular'
  
  constructor() {
    console.log('App created...');
  }
}
