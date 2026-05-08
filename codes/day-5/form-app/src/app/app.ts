import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateDrivenForm } from "./template-driven-form/template-driven-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplateDrivenForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('form-app');
}
