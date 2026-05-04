import { Component } from "@angular/core";
import { Third } from "../third/third";

@Component({
    selector: 'app-second',
    templateUrl:'./second.html', 
    imports: [Third]
})
export class Second {
    constructor() {
        console.log('second');
    }
}