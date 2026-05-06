import { add, divide } from "./utils";

// const divPromise = divide(12, 3)
// divPromise
//     .then(
//         (data) => { console.log(data); }
//     )
//     .catch(
//         (err) => { console.log(err); }
//     )

const callDivide = async (): Promise<void> => {
    try {
        const data = await divide(12, 3)
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
callDivide()

const addRes = add(12, 3)
console.log(addRes);

console.log('thats all');