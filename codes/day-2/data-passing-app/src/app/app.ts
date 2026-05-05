import { Component, signal } from '@angular/core';
import { First } from './first/first';
import { Second } from './second/second';

@Component({
  selector: 'app-root',
  imports: [First, Second],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  data = 10
  show = false
  toggle() {
    this.show = !this.show
  }
  increase() {
    this.data += 1
  }
  constructor() {
    console.log('App Created...');
  }

  updateData(value: number) {
    this.data = value
  }
}
