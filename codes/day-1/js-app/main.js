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


function add(a, b) {
    return a + b
}

function invoke(fnRef, x, y) {
    console.log(fnRef(x,y))
}

invoke(add, 12, 14)

//}
//global()
