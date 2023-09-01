                 // data access 

// 1.  kivabe data access karte pari ta proti step console kare dekhano hosse
const data = [{id: 1, name: 'abul', address: 'Dhaka', }];
//console.log(data.address) // undefine dekhabe 
  

// akhane pura array take dekbabe
// console.log(data)  
//[ { id: 1, name: 'abul', address: 'Dhaka' } ]

//akhane array ar vitore prothom upadan pabo. prothom upadan holo pura carly bracekt ar sobtuku
// console.log(data[0])
// { id: 1, name: 'abul', address: 'Dhaka' } 


// akhon address take paoa jabe
// console.log(data[0].address)
//Dhaka



// 2. supppose amader onek gulo product ase oikhan theke amder 2nd product ar price ta nite hobe

const products = {
    count : 5000,
    data : [
        { id: 1, name: 'Lenovo laptop', price: 65000 },
        { id: 2, name: 'dell', price: 85000 },
        { id: 3, name: 'mackBook', price: 155000 },
    ]

}

// amra step by step jabo as junior developer hisebe
// console.log(products);
/**
 {
  count: 5000,
  data: [
    { id: 1, name: 'Lenovo laptop', price: 65000 },
    { id: 2, name: 'dell', price: 85000 },
    { id: 3, name: 'mackBook', price: 155000 }
  ]
}
 */


// console.log(products.data)
/**
  [
  { id: 1, name: 'Lenovo laptop', price: 65000 },
  { id: 2, name: 'dell', price: 85000 },
  { id: 3, name: 'mackBook', price: 155000 }
]
 */

// console.log(products.data[1])
//{ id: 2, name: 'dell', price: 85000 }

// console.log(products.data[1].price);
//85000



// 3. amra akhon user ar street address ar 2nd ta ber karbo

const user = {
    id: 101,
    name : 'Shoriful Raj',
    address: {
        street: {
            first: '35/5 uttor side',
            second: 'poribag ar goli',
            third: 'no dorai'
        },
        city: 'Dhaka'
    }
}

// console.log(user)
/**
 {
  id: 101,
  name: 'Shoriful Raj',
  address: {
    street: {
      first: '35/5 uttor side',
      second: 'poribag ar goli',
      third: 'no dorai'
    },
    city: 'Dhaka'
  }
}
 */

// console.log(user.address)
/**
 * {
  street: {
    first: '35/5 uttor side',
    second: 'poribag ar goli',
    third: 'no dorai'
  },
  city: 'Dhaka'
}
 */

// console.log(user.address.street);
/**
  {
  first: '35/5 uttor side',
  second: 'poribag ar goli',
  third: 'no dorai'
}
 */

// console.log(user.address.street.second)
//poribag ar goli




// 4. optional chain hosse ? mark. jodi kono object ar property na thake and amra 
// oi property k console kare output pete chai tokhon erron dibe but console kara somoi
// jodi property ar namer por jod ? dei tahole ar erron khabo na oi khan theke code r run
// karbena and output undefined dekhabe


const user2 = {
    id: 101,
    name : 'Shoriful Raj',
    address: {
        city: 'Dhaka',
        country: 'Bangladesh',

    }
}
// aivabe error dekhabe
// console.log(user2.address.street.second)



// akhane optional chain use kara hoese ? (question mark hosse optional chain)
console.log(user2.address.street?.second)
