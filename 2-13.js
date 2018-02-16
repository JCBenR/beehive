//object literals
const person = {
  firstName: 'steve',
  lastName: 'smith',
  age: 40,
  email: 'steve@test.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'miami',
    state: 'FL',
  },
  getBirthYear: function(){
    return 2017 - this.age; //remember to use the 'this' function to access an object defined in this  specific list.
  }
}

let val;

val = person;

//get specific value
val = person.firstName;
val = person['firstName']; //this way works too but isn't the standard practice.
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.getBirthYear();

console.log(val);

const people = [
  {name: 'john', age: 30},
  {name: 'mike', age: 21},
  {name: 'nancy', age: 32}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}
