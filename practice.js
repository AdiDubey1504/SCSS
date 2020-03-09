// let countriesids = [1,2,3];
// let countries = []

// for(let i = 0; i < countriesids.length; i++) {
//   countries.push(fetch(`http://localhost:3020/countries/${countriesids[i]}`).then(res => {
//     return res.json();
//   }));
// }

// console.log("countries", countries);

// Promise.all(countries).then(res => {
//   console.log("countries", res);
// });

// let task = new Promise(function(res, rej) {
//   console.log("Starting the task");
//   res();
// });

// console.log("sdd", task);

// task
// .then(function() {
//   return new Promise(function(res, rej) {
//     setTimeout(function() {
//       console.log("Doing the task");
//       res("First");
//     }, 2000);
//   })
// })
// .then(function(r) {
//   console.log("Done with the task", r);
// })

console.log("Beginning the program");

function begin() {
  console.log("Starting with the task");
}
function doing(callback) {
  console.log("Doing the task");
  setTimeout(function() {
    callback();
  }, 2000);
}
function done() {
  console.log("Done with the task");
}

begin();
doing(done);

console.log("Going ahead with the program");

// console.log("Beginning the program");

// let task = new Promise(function(res, rej) {
//   console.log("Starting with the task");
//   setTimeout(function() {
//     res("Doing the task - halfway there");
//   }, 2000);
// });

// task
// .then(mes => {
//   console.log(mes);
//   return new Promise((res, rej) => {
//     setTimeout(function() {
//       res("Done with the task");
//     }, 2000);
//   })
// })
// .then(mes => {
//   console.log(mes);
// })

// console.log("Going ahead with the program");

/*
"Beginning the program"
"Starting with the task"
"Going ahead with the program"
"Doing the task - halfway there"
"Done with the task"
*/