//challenge 1 :

function evennum(arr) {
  let arr1 = [];
  for (let i = 0; i < arr.lenght; i++) {
    if (arr[i] % 2 === 0) {
      arr1 = arr1 + arr[i];
    }
  }
  return arr1;
  console.log(arr1);
}
//challenge 2 :
let person = {
  name: "dalila",
  age: "19",
  "e-mail": "rouabahdalilachaima@gmail.com",
};
function olderthan(arr) {
  let arr1 = [];
  for (let i = 0; i < arr.lenght; i++) {
    if (arr[i].person.age >= 30) {
      arr1 = arr1 + arr[i];
    }
  }
  return arr1;
  console.log(arr1);
}
///22
let person1 = {
  name: "John",
  age: 25,
  email: "john@example.com",
};
let person2 = {
  name: "Jane",
  age: 35,
  email: "jane@example.com",
};
let person3 = {
  name: "Mike",
  age: 40,
  email: "mike@example.com",
};
// Array of people
let people = [person1, person2, person3];
function filterOver30(arr) {
  return arr.filter(function (person) {
    return person.age > 30;
  });
}
// Example usage:
let peopleOver30 = filterOver30(people);

console.log(peopleOver30);
//challenge 3:
let stack = [];
stack.push("one");
stack.push("two");
stack.push("three");
console.log(stack);
//challenge 4:
let queue = [];
queue.push("one");
queue.push("two");
queue.push("three");
//challenge 5:
let string = "chaima";
let word = "";
arr = string.split("");
for (let i = 0; i < arr.lenght; i++) {
  if (arr[i] === a || arr[i] === A) {
    i += 1;
  } else if (arr[i] === a || arr[i] === A) {
    i += 1;
  } else if (arr[i] === i || arr[i] === I) {
    i += 1;
  } else if (arr[i] === u || arr[i] === U) {
    i += 1;
  } else if (arr[i] === o || arr[i] === O) {
    i += 1;
  } else if (arr[i] === e || arr[i] === E) {
    i += 1;
  } else if (arr[i] === y || arr[i] === Y) {
    i += 1;
  } else word = arr[i];
  return word;
}
