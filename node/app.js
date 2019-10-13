const ob = require('./tutorial');
//console.log(ob.VALUE);
//console.log(ob.sum(1, 10));



const events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('my_event', () => {
    console.log('data received succesfully.');
});
//eventEmitter.emit('my_event');

events._name = 1;
console.log(events._name)

class Person extends events {
    constructor(name, age) {
        super(); // allow to use “this” 
        this._name = name; // 这个下划线？强👍
        this._age = age;
        console.log(age);
    }
    get name() {
        return this._name;
    }
}

const me = new Person("Steven", 20);
console.log(me._age);

me.on('name', () => {
    console.log("my name is " + me)
})

eventEmitter.emit('name');