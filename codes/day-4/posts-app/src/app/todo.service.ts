import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Todo } from "../models/todo";
import { Observable } from "rxjs";
import { TodoServiceContract } from "./todo-service-contract";

//@Injectable({ providedIn: 'root' })
@Injectable()
export class TodoService implements TodoServiceContract {
    private http: HttpClient = inject(HttpClient)
    // private http: HttpClient;
    // constructor(http: HttpClient) {
    //     this.http = http
    // }
    private url = 'https://jsonplaceholder.typicode.com/todos'

    getAll(): Observable<Todo[]> {
        const obs: Observable<Todo[]> = this.http.get<Todo[]>(this.url)
        return obs
    }

    get(id: number): Observable<Todo> {
        const obs: Observable<Todo> = this.http.get<Todo>(`${this.url}\${id}`)
        return obs
    }

    add(todo: Todo): Observable<Todo> {
        const obs: Observable<Todo> = this.http.post<Todo>(this.url, todo)
        return obs
    }

    update(id: number, todo: Todo): Observable<Todo> {
        const obs: Observable<Todo> = this.http.put<Todo>(`${this.url}\${id}`, todo)
        return obs
    }

    delete(id: number): Observable<Todo> {
        const obs: Observable<Todo> = this.http.delete<Todo>(`${this.url}\${id}`)
        return obs
    }
}