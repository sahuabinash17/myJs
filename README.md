# myJs
practice session


//notes on Promise
Note on Promises --
What is Promise?
Promises are used to handle asynchronous operations in JavaScript. They are easy to
manage when dealing with multiple asynchronous operations where callbacks can
create callback hell leading to unmanageable code.
Promises have four states --
fulfilled: Action related to the promise succeeded
rejected: Action related to the promise failed
pending: Promise is still pending i.e not fulfilled or rejected yet
settled: Promise has fulfilled or rejected
Syntax --
A promise can be created using Promise constructor.
var promise = new Promise(function(resolve, reject){
//do something
});
var promise = new Promise(function(resolve, reject) {
reject('Promise Rejected')
})
promise
.then(function(successMessage) {
console.log(successMessage);
}, function(errorMessage) {
//error handler function is invoked
console.log(errorMessage);
})
o/p - Promise Rejected
Different methods of promises --
1. Promise.all() --
The Promise.all() method returns a single Promise that fulfils when
all of the promises passed as an iterable have been fulfilled or when the iterable
contains no promises or when the iterable contains promises that have been
fulfilled and non-promises that have been returned. It rejects with the reason of
the first promise that rejects, or with the error caught by the first argument if that
argument has caught an error inside it using try/catch/throw blocks.
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise(function(resolve, reject) {
setTimeout(resolve, 100, 'foo');
});
Promise.all([promise1, promise2, promise3]).then(function(values) {
console.log(values);
});
o/p --
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise(function(resolve, reject) {
setTimeout(reject, 100, 'foo');
});
Promise.all([promise1, promise2, promise3]).then(function(values) {
console.log(values);
});
o/p -- Array [3, 42, "foo"]
2. Promise.allSettled()
The Promise.allSettled() method returns a promise that resolves after
all of the given promises have either resolved or rejected, with an array of
objects that each describes the outcome of each promise.
Example --
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100,
'foo'));
const promises = [promise1, promise2];
Promise.allSettled(promises).
then((results) => results.forEach((result) => console.log(result.status)));
O/p --
> "fulfilled"
> "rejected"
3.Promise.any
Promise.any() takes an iterable of Promise objects and, as soon as one of the
promises in the iterable fulfills, returns a single promise that resolves with the
value from that promise. If no promises in the iterable fulfill (if all of the given
promises are rejected), then the returned promise is rejected with an object that
is still up for debate: either an array of rejection reasons, or an AggregateError,
a new subclass of Error that groups together individual errors. Essentially, this
method is the opposite of Promise.all().
Warning! The Promise.any() method is experimental and not fully supported by all
browsers. It is currently in the TC39 Candidate stage (Stage 3).
4.Promise.race()
The Promise.race() method returns a promise that fulfills or rejects as soon as one
of the promises in an iterable fulfills or rejects, with the value or reason from that
promise.
Ex - const promise1 = new Promise(function(resolve, reject) {
setTimeout(resolve, 500, 'one');
});
const promise2 = new Promise(function(resolve, reject) {
setTimeout(resolve, 100, 'two');
});
Promise.race([promise1, promise2]).then(function(value) {
console.log("value");
// Both resolve, but promise2 is faster
});
// expected output: "two"
Promise.prototype.then()
The then() method returns a Promise. It takes up to two arguments: callback
functions for the success and failure cases of the Promise.
Ex - const promise1 = new Promise(function(resolve, reject) {
resolve('Success!');
});
promise1.then(function(value) {
console.log(value);
// expected output: "Success!"
});
Promise.reject() --
The Promise.reject() method returns a Promise object that is rejected with a
given reason.
function resolved(result) {
console.log('Resolved');
}
function rejected(result) {
console.error(result);
}
Promise.reject(new Error('fail')).then(resolved, rejected);
// expected output: Error: fail
Promise.resolve() --
The Promise.resolve() method returns a Promise object that is resolved with a
given value. If the value is a promise, that promise is returned; if the value is a thenable
(i.e. has a "then" method), the returned promise will "follow" that thenable, adopting
its eventual state; otherwise the returned promise will be fulfilled with the value. This
function flattens nested layers of promise-like objects (e.g. a promise that resolves to a
promise that resolves to something) into a single layer.
. Promise.prototype.finally()
The finally() method returns a Promise. When the promise is settled, i.e either
fulfilled or rejected, the specified callback function is executed. This provides a way for
code to be run whether the promise was fulfilled successfully or rejected once the
Promise has been dealt with.
This helps to avoid duplicating code in both the promise's then() and catch()
handlers.
