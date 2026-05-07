import { Observable } from "rxjs";
import { Todo } from "../models/todo";

export interface TodoServiceContract {
    getAll(): Observable<Todo[]>;
    get(id: number): Observable<Todo>;
    add(todo: Todo): Observable<Todo>;
    update(id: number, todo: Todo): Observable<Todo>;
    delete(id: number): Observable<Todo>;
}