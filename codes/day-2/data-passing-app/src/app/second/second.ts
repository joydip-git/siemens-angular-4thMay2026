import { Component, EventEmitter, output, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.html',
  styleUrl: './second.css',
})
export class Second {
  secondData = 0
  //@Output('someDataChanged') someDataUpdated = new EventEmitter<number>()
  someDataUpdated = output<number>({ alias:'someDataChanged'})

  onSomeDataChanged(data: number) {
    this.secondData = data
    this.someDataUpdated.emit(this.secondData)
  }
}
