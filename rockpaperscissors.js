choices = ['rock', 'paper', 'scissors']

console.log(choices);

const computer = choices[Math.floor(Math.random() * choices.length)];

console.log("computer chose " + computer)

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('type now: ', (ser_input) => {
    console.log('You typed: ${ser_input');
    rl.close();
})