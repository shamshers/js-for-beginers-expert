const myArray = ['h', 'e', 'l', 'l', 'o'];

// first element
console.log(myArray[0]);  // "h"

// second element
console.log(myArray[1]); // "e"

let dailyActivities = ['eat', 'sleep'];

// add an element at the end
dailyActivities.push('exercise');

console.log(dailyActivities); //  ['eat', 'sleep', 'exercise']

let dailyActivities1 = ['eat', 'sleep'];

//add an element at the start
dailyActivities1.unshift('work'); 

console.log(dailyActivities1); // ['work', 'eat', 'sleep']


dailyActivities1[2]='exercise'

console.log(dailyActivities1)

dailyActivities1.pop()

const removedElement=dailyActivities1.pop()

console.log(removedElement)
console.log(dailyActivities1)

//remove the first element

dailyActivities.shift()
console.log(dailyActivities)

// array length

console.log(dailyActivities.length)

// array methods : splice , slice, includes,findindex,find