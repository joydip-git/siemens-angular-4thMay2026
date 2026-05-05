//import { NgFor, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  //imports: [NgFor, NgIf],
  imports:[],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  names = ['anil', 'sunil', 'joydip']
}
