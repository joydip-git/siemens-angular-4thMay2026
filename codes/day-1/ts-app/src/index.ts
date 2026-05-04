import { numbers } from "./data";
import { employees } from "./models/employees";
import { Person } from "./types";
import { add, invoke, test } from "./utility";

employees
    .map(
        e => {
            e.calculateSalary()
            return e
        })
    .filter(e => e.totalPay >= 10000)
    .forEach(e => console.log(e.name))


numbers
    .filter((ele) => ele > 100)
    .map(ele => `Value: ${ele * 5}`)
    .forEach(ele => console.log(ele))

invoke(add, 12, 13);

console.log(test('joydip'))

const joydipObj: Person = {
    id: 1,
    name: 'joydip',
    salary: 1000,
    print: function () {
        return `${this.id}, ${this.name},${this.salary}`
    },
}
console.log(joydipObj.name);
console.log(joydipObj['salary']);
console.log(joydipObj.print());

console.log('making changes');