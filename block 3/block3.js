// 1.

// const citiesAndCountries = {
// 	'Киев': 'Украина',
// 	'Нью-Йорк': 'США',
// 	'Амстердам': 'Нидерланды',
// 	'Берлин': 'Германия',
// 	'Париж': 'Франция',
// 	'Лиссабон': 'Португалия',
// 	'Вена': 'Австрия',
// };


// function getCity(){
//     let res = []
//     let arr = Object.entries(citiesAndCountries)
//     for (i of arr) {
//         res.push(`${i[0]} - это ${i[1]}`)
//     }
//     return res

// }
// const result = getCity()
// console.log('res ', result)

// function getCity2(){
//     let res = []
//     let arr = Object.entries(this)
//     for (i of arr) {
//         res.push(`${i[0]} - это ${i[1]}`)
//     }
//     return res
// }

// const result2 = getCity2.call(citiesAndCountries)
// console.log('res2', result2)

// 2.

// const week = {
//     ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//     en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// }

// function getNameOfDay(lang, datNumber){
//     if(Object.keys(week).includes(lang)){
//         return week[lang][datNumber-1]
//     }
//     else{
//         return 'There are no such language'
//     }

// }

// console.log(getNameOfDay('en', 4))

// 3, 4.

const person = {
    name: 'Vlad',
    age: 35,

    ageValidation: function(n){
        if (n < 18){
            return 'Validation Error'
        }
        else{
            return n
        }
    },
    setName: function(n){
        this.name = n
    },
    setAge: function(n){
        let val = this.ageValidation(n)
        this.age = val
    },
    getname: function(){
        return this.name
    },
    getAge: function(){
        return this.age
    }

};
const person1 = {
    age: 1
};


function setProto(currentObj, protoObj){
    protoObj.__proto__ = currentObj
}

setProto(person, person1)

console.log(Object.getPrototypeOf(person1))

person1.setName('Igor')
console.log(person1.getname())

person1.setAge(18)
console.log(person1.getAge())

