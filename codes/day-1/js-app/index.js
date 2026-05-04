console.log('welcome to JS')

var numberValue = 10
var floatValue = 12.34
var stringValue = 'joydip'
var boolValue = true

console.log(numberValue, typeof numberValue);
console.log(floatValue, typeof floatValue);
console.log(stringValue, typeof stringValue);
console.log(boolValue, typeof boolValue);

var joydipObj = null;
console.log(joydipObj, typeof joydipObj);
joydipObj = {
    //value properties
    id: 1,
    name: 'joydip',
    salary: 1000,
    //functional property
    print: function () {
        return `Id=${this.id},Name=${this.name}, Salary=${this.salary}`
    }
}

console.log(joydipObj, typeof joydipObj);

function add(a, b) {
    return a + b
}

console.log(add, typeof add);

var x
console.log(x, typeof x);

var y = 10
var res = x + y
console.log(res, typeof res);


try {
    var divRes = 12 / 0
    console.log(divRes, typeof divRes);
    if (divRes === Infinity)
        throw new Error('divisor is zero')
} catch (error) {
    console.log(error);
}