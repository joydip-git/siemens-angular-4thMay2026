import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateDrivenForm } from "./template-driven-form/template-driven-form";
import { ReactiveForm } from "./reactive-form/reactive-form";

@Component({
  selector: 'app-root',
  imports: [ReactiveForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
