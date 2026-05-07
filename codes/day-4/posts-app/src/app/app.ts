import { Component, Inject, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { TodoServiceContract } from './todo-service-contract';
import { SERVICE_TOKEN } from './app.config';
import { Subscription } from 'rxjs';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  private todoSvc: TodoServiceContract;// = inject(SERVICE_TOKEN)
  private subscription?: Subscription;

  constructor(@Inject(SERVICE_TOKEN) todoSvc: TodoServiceContract) {
    this.todoSvc = todoSvc
  }

  todos = signal<Todo[]>([])
  isRequestOver = signal(false)
  errorInfo = signal('')

  ngOnInit(): void {
    this.subscription = this.todoSvc
      .getAll()
      .subscribe({
        next: (records: Todo[]) => {
          this.todos.set(records)
          this.errorInfo.set('')
          this.isRequestOver.set(true)
        },
        error: (err) => {
          this.todos.set([])
          this.errorInfo.set(err.message)
          this.isRequestOver.set(true)
        }
      })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}

