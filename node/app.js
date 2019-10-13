const ob = require('./tutorial');
//console.log(ob.VALUE);
//console.log(ob.sum(1, 10));



const events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('my_event', () => {
    console.log('data received succesfully.');
});
eventEmitter.emit('my_event');

class Person extends events {
    constructor(name) {
        super();
        this._name = name;
        console.log(name);
    }
    get name() {
        return this._name;
    }
}

let p = new Person("P");
//console.log(p);