//Adding element to the outer array
let studentsData = [['Jack', 24], ['Sara', 23],];
studentsData.push(['Peter', 24]);

console.log(studentsData); //[["Jack", 24], ["Sara", 23], ["Peter", 24]

//Adding element to the inner array
// using index notation
let studentsData1 = [['Jack', 24], ['Sara', 23],];
studentsData1[1][2] = 'hello';

console.log(studentsData1); // [["Jack", 24], ["Sara", 23, "hello"]]

//splice method

let studentsData2 = [['Jack', 24], ['Sara', 23],];

// adding element at 1 index
studentsData2.splice(1, 0, ['Peter', 24]);

console.log(studentsData2); // [["Jack", 24], ["Peter", 24], ["Sara", 23]]