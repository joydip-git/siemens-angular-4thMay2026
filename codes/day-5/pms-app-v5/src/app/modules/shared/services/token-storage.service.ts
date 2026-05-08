import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn:'root'})
export class TokenStorageService{
    private storage = new BehaviorSubject<string|null>(null)
    store = this.storage.asObservable()

    saveToken(token: string) {
        this.storage.next(token)
    }
    getToken() {
        return this.storage.value;
    }
    removeToken() {
        this.storage.next(null)
    }
}