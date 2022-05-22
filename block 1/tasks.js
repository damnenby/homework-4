// 1.
let a = prompt('Введите число')

function getAllSquares(number){
    let res = 0
    for (let i = 1; i<=number; i++){
        res += i**2
    }
    return res
}

console.log(getAllSquares(a))

// 2.

let myarr = [3, 5, 12, 9, 23, 93, 17]

console.log(myarr.filter(item => (item < 20)).filter(item => item > 2))

// 3.

let arr1 = [[1, 6, 3, '6'], [10, 15, 13, '10']]

function getSum2dArrMult2(arr){
    let res = 0
    for (subarr of arr){
        for (item of subarr){
            if(typeof(item) === 'number'){
                res += item
            }
        }
    }
    return res
}

console.log(getSum2dArrMult2(arr1));

// 4.

const addProperty = function(key, value, object){
    if(object[key]){
        console.log('Уже есть')
        return
    }
    else{
        return (object[key] = value)
    }

}

const cat = {
    name: 'Felix',
}

addProperty('Age', 9, cat)
console.log(cat)
addProperty('name', 'Alisa', cat)
console.log(cat)

