/**
 * reduce hosse array theke sobgulo upadan theke nie akta kisu karbe. reduce() vitore at least
 * 2 ta jinis dite hoi. akta call back function and arek ta initial value. call back function ar vitore abar 
 * 2 ta parameter dite hoi ja naki map, forEach, filter, find ar khetre akta kare parameter use kara hoese
 * jemon frnd, n, p, 
 * 
 * 
 * amra akhon akta array k total karbo akhane prvious and current namer 2tam parameter nibo
  *  */

const numbers = [4, 5, 7, 1, 2, 66];
const total = numbers.reduce((previous, current) => previous + current , 0);
console.log(total)

// akhane previous and current 2ta parameter ja naki previous function a akta kore cilo and 0 ta inital value
// ja naki previous function a cilo na 
// niche arektu shortcut a karbo

const sum = numbers.reduce((p, c) => p + c , 0 );
console.log(sum)
