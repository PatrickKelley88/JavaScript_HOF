console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number) {
    return (plusNumber) => number + plusNumber;
}
const plus15 = plus(15);
console.log(plus15);
console.log(plus15(10));

// Exercise 2

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

  users.forEach((user) => {
    console.log(user.name);
  });

// Exercise 3

const userNamesAndScores = users.map((element) => {
  return [
    element.name,
    element.score,
   ];
}); 

console.log(userNamesAndScores);

// Exercise 4

const filteredUsers = users.filter((element) => {
    return element.isActive;
});


console.log(filteredUsers);

// Exercise 5

users.sort((a, b) => {
    return b.score - a.score;
});

console.log(users);

// Exercise 6

let totalScore = users.reduce((acc, user) => {
    return acc + user.score;
},0);

console.log(totalScore);



//Extra practice

const students = [
  { name: 'Alice', score: 85, age: 20, major: 'Computer Science' },
  { name: 'Bob', score: 92, age: 22, major: 'Engineering' },
  { name: 'Charlie', score: 88, age: 21, major: 'Fine Arts' },
  { name: 'David', score: 95, age: 23, major: 'Computer Science' },
  { name: 'Eve', score: 79, age: 20, major: 'Engineering' },
  { name: 'Frank', score: 82, age: 21, major: 'Fine Arts' },
  { name: 'Grace', score: 90, age: 22, major: 'Computer Science' }

];

