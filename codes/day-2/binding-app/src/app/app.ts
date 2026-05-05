import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //message = "welcome to binding"
  message: WritableSignal<string> = signal<string>("welcome to binding")
  widthValue = 300
  data = signal<number>(0)
  computedData: Signal<number> = computed<number>(() => this.data() * 2)
  counter = signal<number>(0)
  // updateMessage(value: string) {
  //   this.message.set(value)
  // }
}
