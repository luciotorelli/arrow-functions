/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers1(a, b) {
    // Code Block
    return a + b;
}

let sum1 = addTwoNumbers1(3, 5);
console.log(sum1);

// Arrow Function With Parameters

const addTwoNumbers2 = (a, b) => {
    // Code Block
    return a + b;
}

let sum2 = addTwoNumbers2(3, 5);
console.log(sum2);

// Single Line Arrow Function With Parameters

const addTwoNumbers3 = (a, b) => a + b;
let sum3 = addTwoNumbers2(6, 4);
console.log(sum3);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello there!');

const sayHellow = () => console.log('hello');
sayHellow();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
        This is a multiline string!
    </p>
    `
)
console.log(returnMultipleLines());
