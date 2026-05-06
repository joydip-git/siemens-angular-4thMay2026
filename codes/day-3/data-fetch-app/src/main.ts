import { BehaviorSubject, Observable, of, throwError } from "rxjs"
import { Post } from "./models/post"

class HttpClient {
    get<T>(url: string): Observable<T | undefined> {
        const store = new BehaviorSubject<T | undefined>(undefined)
        const obs: Observable<T | undefined> = store.asObservable()

        fetch(url)
            .then(
                (resp: Response) => {
                    resp
                        .json()
                        .then(
                            (data) => {
                                if (data)
                                    store.next(data)
                            }
                        )
                }
            )
            .catch(
                (err) => { throw err }
            )
        return obs
    }
}

const client = new HttpClient()
const obs = client.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
obs.subscribe({
    next: (data) => {
        if (data)
            console.log(data.slice(0, 5))
    },
    error: (err) => console.log(err)
})

