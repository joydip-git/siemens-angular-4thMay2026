import { Observable, Observer, Subscription } from "rxjs";
import { ValueStorage } from "./storage";

//consumer
const consumerStore = ValueStorage.instantiate()
const obs: Observable<number> = consumerStore.store
const observer: Observer<number> = {
    next: (data) => console.log("received: " + data),
    error: (err) => console.log(err),
    complete: () => console.log('other task')
}
const subscription: Subscription = obs.subscribe(observer)
setTimeout(
    () => {
        subscription.unsubscribe();
    },
    10000
)

//provider
const providerStore = ValueStorage.instantiate()

let value = 1
setInterval(
    () => {
        console.log("publishing " + value);
        providerStore.publish(value)
        ++value
    },
    1000
)