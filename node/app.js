const ob = require('./tutorial');
//console.log(ob.VALUE);
//console.log(ob.sum(1, 10));

console.log("===start here===")

const events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('my_event', () => {
    console.log('data received succesfully.');
});
eventEmitter.emit('my_event');

events._name = 1;
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
her.emit("name")