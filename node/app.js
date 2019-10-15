//1. FROM MODULE
const ob = require('./tutorial'); // get the things in tutorial.js
//console.log(ob.VALUE);
//console.log(ob.sum(1, 10));

//console.log("===start here===")


//2.emit and listen 
const events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('my_event', () => {
    console.log('data received succesfully.');
});
eventEmitter.emit('my_event');

events._name = 10.7;
console.log(events._name)

class Person extends events {
    constructor(name, age) {
        super(); // allow to use “this” 
        this._name = name; // 这个下划线？强👍
        this._age = age;

    }
    get name() {
        return this._name;
    }
}

const me = new Person("Steven", 20);
const her = new Person("Kerry", 19);

me.on('name', () => {
        console.log("my name is " + me.name + "," + me._age) // 搞不懂这个下划线
    }) // 没有getter return this._age的话就需要_age 
me.emit('name');

her.on('name', () => {
    console.log("her name is " + her._name + "," + her._age)
})
her.emit("name");


//3.READ LINE MODULE
const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin, // process == global object given by node
    output: process.stdout
})

let num1 = Math.floor((Math.random() * 10 + 1));
let num2 = Math.floor((Math.random() * 10 + 1));
let answer = num1 + num2;

r1.question((`What is ${num1} + ${num2}? \n`), // 这里是 `` 而不是单引号
    (userInput) => {
        if (userInput.trim() == answer) {
            r1.close();
        } else {
            r1.setPrompt("Incorrect, try again \n");
            r1.prompt();
            r1.on('line', (userInput) => {
                if (userInput.trim() == answer)
                    r1.close();
                else { r1.prompt() } // go on until it is RIGHT. 
            })
        }
    });

r1.on('close', () => { // listening to 'close'
    console.log("Correct")
})


//4. FILE SYSTEM MODULE
const fs = require('fs');
//create a file
fs.writeFile('example.txt', "this is the thing will be in the file", (err) => {
    if (err)
        console.log(err);
    else {
        console.log("File created")
        fs.readFile('example.txt', (err, file) => {
            if (err)
                console.log(err);
            else
                console.log(file);
        })
    }
})