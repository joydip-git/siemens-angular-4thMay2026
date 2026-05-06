import { BehaviorSubject, Observable } from "rxjs";
export class ValueStorage {
    private static instance: ValueStorage | null = null
    private storage: BehaviorSubject<number> = new BehaviorSubject<number>(0)
    public store: Observable<number> = this.storage.asObservable()

    private constructor() {
        console.log('created..')
    }
    public static instantiate(): ValueStorage {
        if (this.instance === null)
            this.instance = new ValueStorage()
        return this.instance
    }

    public publish(value: number): void {
        this.storage.next(value)
    }
}