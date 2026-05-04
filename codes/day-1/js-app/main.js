//function global(){
function test() {
    //console.log(data); //undefined
    let data = 10
    console.log(data);//10
    for (let i = 0; i < 1; i++) {
        let data = 20
        console.log(data);//20
    }
    console.log(data);//10
}
test()
console.log('hello');
const x = 10
//x = 20
console.log(x);
//const numbers = new Array(10,20,30)
const numbers = [10, 20, 30]
numbers.push(40)
console.log(numbers);

const copy = numbers.slice(0, 2);
console.log(copy);

//numbers.splice(2, 1)
numbers.splice(2, 1, 300, 400, 500)
console.log(numbers);


for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for (let element of numbers) {
    console.log(element);
}

for (let index in numbers) {
    console.log(numbers[index]);
}


function add(a, b) {
    return a + b
}

function invoke(fnRef, x, y) {
    console.log(fnRef(x, y))
}

invoke(add, 12, 14)

console.log(object);
const filteredNumbers = numbers
    .filter(
        function (element) {
            return element > 100
        }
    )

filteredNumbers
    .map(
        function (ele) {
            return "value " + (ele * 5)
        }
    )
    .forEach(
        function (ele) {
            console.log(ele);
        }
    )

//}
//global()
// function greaterThanHundred(ele) {
//     return ele > 100
// }
// function lesserThanHundred(ele) {
//     return ele > 100
// }
// function filterNumbers(arr, logicToFilterFn) {
//     const result = []
//     for (let ele of arr) {
//         let isTrue = logicToFilterFn(ele)
//         if (isTrue)
//             result.push(ele)
//     }
//     return result
// }
// filterNumbers(numbers, greaterThanHundred)
// filterNumbers(numbers,lesserThanHundred)

const isGreater = (ele) => ele > 100
const convertToStringResult = (ele) => `Value: ${ele * 5}`
const printValue = (ele) => console.log(ele)
numbers
    .filter(isGreater)
    .map(convertToStringResult)
    .forEach(printValue)
