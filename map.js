 /**
  * amra array ar element k double karbo
  * one way --->
  */

//  const numbers = [ 2, 3, 5, 4, 8, 9];


//  const doubled = [];
//  for( const number of numbers){
//     const double = number * 2;
//     doubled.push(double);
//  }
// console.log(doubled);

// amra aivabe double karte pari abr akta khubi simple powerfull jinis ase
// ar majeo amra double karte pari




// another way ----> using map 
//map tumi jokhon akta array ar upore chalao and tumi jokhon function ta diba
// oi function ta array ar prottek ta upadaner upore chalabe and function theke 
// j result asbe seta nije akta array ar moddhe rakhbe then oi result ar array ta
// tumak return karbe 
// nicher aitake aro aktuku soto kare lekha jai
 const numbers = [ 2, 3, 5, 4, 8, 9];


 function doubleIt(num){
    return num * 2;
 }

 const result = numbers.map(doubleIt)
//  console.log(result);




// another shortcut way
const double2 = n => n * 2;
const output = numbers.map(doubleIt)
console.log(output);


// another shortcut way
const output2 = numbers.map(n => n * 2);
console.log(output2)



// 5 bonus add kara hobe
const fiveBonus = numbers.map(number => number + 5)
console.log(fiveBonus)



// numbers gulo k half karbo
const halves = numbers.map(number => number / 2)
console.log(halves)



// array ar moddhe kisu friends ase tader namer length ber karbo

const friends = [ 'Tom', 'John', 'Micheal', 'Oliver']

const lenghts = friends.map(frnd => frnd.length)
console.log(lenghts)
// abar jodi friend ar namer first letter ber karte chao
const firstLetter = friends.map(friend => friend[0])
console.log(firstLetter)

// map ar kaj hosse kono akta array ar every element ar upore function chalabo
// seta simple ba complex function hote pare then tarpor function chalanor por j
// upadan gulo se anbe tarpo segulo k akta array ar moddhe rekhe amk return karbe