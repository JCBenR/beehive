//create some arrays
const numbers = [34, 6542 ,34,1,6,34,75];
const numbers2 = new Array(623,873,421,75);
const fruit = ['apple', 'banana', 'orange', 'pear'];
const mixed = [22, 'hello', true, undefined, null, {a:1, b:2}, new Date()];

let val;

// //get array length
// val = numbers.length;
// //check if is array
// val = Array.isArray(numbers);
// //get a single value
// val = numbers[6];

// //instert into array
// numbers[2] = 100;
// //find index of value
// val = numbers.indexOf(75);

// //mutating arrays
// // add on to end 
// numbers.push(250);
// // add on to front
// numbers.unshift(120);

// //take off from end
// numbers.pop();

// //take off from front
// numbers.shift();

// //splice values
// numbers.splice(2, 4);

// //reverse array
// numbers.reverse();

// //concatenate array
// val = numbers.concat(numbers2);

// //sort arrays

// val = fruit.sort();
// val = numbers.sort();

  // //use the compare function
  // val = numbers.sort(function(x, y){
  //   return x - y;

  // });

  // //reverse sort
  // val = numbers.sort(function (x, y) {
  //   return y - x;

  // });

//find
function over50(num) {
  return num > 50;
};

val = numbers.find(over50);

console.log(numbers);
console.log(val);
