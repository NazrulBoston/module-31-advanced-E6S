// prob 1
const oddNumbers = [ 1, 3, 5, 7, 9]

const even = oddNumbers.map(n => n + 1 )
// console.log(even)




//prob 2
const numbers = [33,50, 79, 90, 101, 30]
const more8o = numbers.filter(number => number % 10 === 0)
// console.log(more8o) 



// prob 3

const instructor = [
{ name: 'Node', age: 28, position: 'Senior'},
{ name: 'Akil', age: 26, position: 'Junior'},
{ name: 'Shobuj', age: 30, position: 'Senior'},
]

const senior = instructor.filter(senior => senior.position === 'Senior')
// console.log(senior)



// prob 4
const people = [
    { name: 'Meena', age: 20},
    { name: 'Rina', age: 15},
    { name: 'Suchorita', age: 22}
]

const totalAge = people.reduce((p, c) => p + c.age , 0)

console.log(totalAge)


// // task -1: console log the secondary school location of Sophia 
// let data = {
//     Sophia: {
//         id: 33,
//         study: [
//             {
//                 primary:
//                     [
//                         { school_name: "ABC primary school" },
//                         { location: "Peters burg" }
//                     ]
//             },
//             {
//                 secondary:
//                     [
//                         { school_name: "ABC secondary school" },
//                         { location: "St Lorence" }
//                     ]
//             },
//         ]
//     }
// }
// const location = data.Sophia.study[1].secondary[1].location;
// console.log(location);



// // task-2: console .log  output: Petersburg, Herry

// let students = {
//     2222: {
//         name: "Jack",
//         section: "C",
//         class: "IX",
//         address: {
//             "building no": 12,
//             "street": "St. Jonson",
//             "city": "Petersburg",
//             "country": "UK"
//         }
//     },
//     3333: {
//         name: "Herry",
//         section: "D",
//         class: "X",
//         address: {
//             "building no": 85,
//             "street": "DC road",
//             "city": "Kachukhet",
//             "country": "Bangladesh"
//         }
//     }
// }

// const name2nd = students['3333'].name;
// console.log(name2nd);

// const address1st = students['2222'].address['city'];
// console.log(address1st)



// task-3 : access and then show habluder adda
// show output Beginner
let data2 = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}

//  console.log(data2.data[0].bookDetails.name)
// console.log(data2.data[1].bookCategory)