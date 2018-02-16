const name = 'justin';
const age = '36';
const job = 'orbit';
const city = 'salt lake';
let html;

//without template strings (es5)
html = '<ul><li>Name: '+ name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City ' + city + '</li></ul>';


//with template strings (es6)

html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
  </ul>
`;