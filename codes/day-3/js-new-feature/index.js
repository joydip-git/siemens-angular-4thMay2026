// ... -> REST operator
const calculateAverage = (name, ...args) => {
    let sum = 0
    let avg = 0

    for (const element of args) {
        sum += element
    }
    avg = sum / args.length
    return avg
}

console.log(calculateAverage('anil', 20, 12, 14))
console.log(calculateAverage('sunil', 20, 12, 14, 18, 19))

const anilObj = {
    id: 1,
    name: 'anil',
    salary: 1000
}

// const copy = {}
// for (const propName in anilObj) {
//     const propValue = anilObj[propName]
//     copy[propName] = propValue
// }

// console.log(anilObj);
// console.log(copy);

// const clone = Object.assign({}, anilObj)
// console.log(clone);

//... -> spread operator
const copy = { ...anilObj }
console.log(anilObj);
console.log(copy);
const anothercopy = {
    ...copy,
    salary: 2000
}
console.log(anothercopy);
const nums = [1, 2, 3, 4]
const copyNums = [...nums, 10, 20]


// const id = anilObj.id
// const name = anilObj.name
// const salary = anilObj.salary
//const { id: id, salary: salary } = anilObj
const { id, salary } = anilObj
console.log(id, salary);

//const utilExports = require('./utility')
//const { add, subtract } = require('./utility')
// console.log(utilExports);
// console.log(utilExports.add(12, 13))
import { add, subtract } from "./utility";
console.log(add(12, 13));
console.log(subtract(2, 1));