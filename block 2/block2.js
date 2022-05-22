// 1 Это я посмотрел в ютубе, понял принцип работы но сам не смог додуматься :(
const bindFunc = function(func, arg, ...args){
    return function(){
        const id = Date.now().toString()

        arg[id] = func

        const result = arg[id](...args)

        delete arg[id]

        return result
    }

}

const person = {
    name: "Joe Biden",
}

const hi = function(message){
    console.log (`Hello, ${this.name}! ${message}`);
}
bindFunc(hi, person, 'Get out of here!')()


// 2.
const numbers = {
    a: 1,
    b: 2,
    c:3,
    d: -4,
    e: 9
}

const func = function(){
    res = 0
    for (i of Object.values(this)){
        if (i > 0){
            res += i
        }
    }
    return res
}

console.log(func.call(numbers))


// 3.
function getNewArray(){
    let arr = this.values;
    let res = [];
    for(i of arr){
        if (typeof (i) === 'number' && i%2==0 && i > 2 && i < 10){
            res.push(i)
        }
    }
    return res
}

const valObject0 = {
    values: [1, '2', 4, 8, '8',  3, 10, null, false]
   };

console.log(bindFunc(getNewArray, valObject0)())

console.log(getNewArray.call(valObject0))


