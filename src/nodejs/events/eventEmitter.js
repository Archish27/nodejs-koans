/**
 * The Node.js Event emitter
 * 
 * If you worked with JavaScript in the browser, you know how much of the interaction of the user is handled through events: 
 * mouse clicks, keyboard button presses, reacting to mouse movements, and so on.
 * 
 * On the backend side, Node.js offers us the option to build a similar system using the events module.
 * 
 * This module, in particular, offers the EventEmitter class, which we'll use to handle our events.
 * 
 * 
 * This object exposes, among many others, the 'on' and 'emit' methods.
 * 'emit' is used to trigger an event
 * 'on' is used to add a callback function that's going to be executed when the event is triggered.
 */
const { equal, deepEqual } = require('assert');

const EventEmitter = require('events');

describe('EventEmitter' , () => {
    beforeEach(() => {
        //Initializing Event Emitter
        eventEmitter = new EventEmitter();
    });

    it('#eventEmitter', (done) => {
        eventEmitter.on('start', (msg) => {
            equal(msg, __)
            done();
        })
        eventEmitter.emit('start', 'I love JavaScript!'); 
    });

    it('#nestedEventEmitter', (done) => {
        eventEmitter.on('end', msg => {
            equal(msg, __)
        })
        eventEmitter.on('start', (msg) => {
            equal(msg, __)
            eventEmitter.emit('end', 'Okay Bye!');
        })
        eventEmitter.emit('start', 'I love Node.js!');
        deepEqual(eventEmitter.eventNames(), [__, __])
        done();
    });
    
    it('#eventEmitteWithMutipleArguments', (done) => {
        eventEmitter.on('start', (first, last) => {
            equal(first, __);
            equal(last, __);
            done();
        })
        eventEmitter.emit('start', 1, 100); 
    });

    it('#eventEmitteWithPrependListener', (done) => {
        eventEmitter.on('start', (first, last) => {
            equal(first, __);
            equal(last, __);
        });
        eventEmitter.prependListener('start', (first, last) => {
            equal(first, __);
            equal(last, __);
        })
        eventEmitter.emit('start', 1, 100); 
        done();
    });

});
