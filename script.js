//
//Task1. Напишите функцию, которая имеет два параметра: товары и стоимость. Верните все товары,
//  которые превышают стоимость.
/* 
expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000)
➞ { "a": 3000, "c": 1050 }

expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000)
➞ { "Gucci Fur": 24600 }

expensiveOrders({ "Deluxe Burger": 35, "Icecream Shake": 4, "Fries": 5 }, 40)
➞ {} */

const expensiveOrders = (good, cost) => {
    for (value in good) {
        if (good[value] <= cost)
            delete good[value]
    }
    console.log(good)
}

expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000)
expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000)
expensiveOrders({ "Deluxe Burger": 35, "Icecream Shake": 4, "Fries": 5 }, 40)



//Task2. Напишите функцию, которая принимает закодированную строку и возвращает объект в соответствии со следующим примером:

/* parseCode("John000Doe000123") ➞ {
    firstName: "John",
    lastName: "Doe",
    id: "123"
  }
  
  parseCode("michael0smith004331") ➞ {
    firstName: "michael",
    lastName: "smith",
    id: "4331"
  }
  
  parseCode("Thomas00LEE0000043") ➞ {
    firstName: "Thomas",
    lastName: "LEE",
    id: "43"
  } */



//   Строка всегда будет в одном формате: имя, фамилия и идентификатор с нулями между ними.
//   Номера id не будут содержать нулей.
//   Попробуйте решить эту задачу без регулярных выражений.

// const parseCode = (str) => {
//     let arr = str.split(0)
//     let newArr = []
//     for (key of arr) {
//         if (key !== '') {
//             newArr.push(key)
//         }
//     }

//     let obj = {
//         firstName: newArr[0],
//         lastName: newArr[1],
//         id: newArr[2]
//     }
//     console.log(obj)
// }


const parseCode = (str) => {
    const arr = str.split(0);
    const filteredArr = arr.filter(val => !(val === ""));
    const obj = {
        firstName: filteredArr[0],
        lastName: filteredArr[1],
        id: filteredArr[2]
    }
    console.log(obj);
}

parseCode("Thomas00LEE0000043")
parseCode("michael0smith004331")
parseCode("John000Doe000123")