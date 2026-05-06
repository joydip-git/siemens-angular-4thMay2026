import { CurrencyPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { EvenNumberFilterPipe } from './even-number-filter.pipe';

@Component({
  selector: 'app-root',
  imports: [LowerCasePipe, UpperCasePipe, CurrencyPipe, EvenNumberFilterPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = 'JOYDIP'
  lower = 'siemens'
  salary = 1000
  numbers = [1, 4, 2, 6, 3, 8, 0, 9, 7, 5]
}
