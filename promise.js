// let countries = [1,2,3];

// let promise = fetch(`http://localhost:3020/countries/1`);

// promise.then(res => { 
//   console.log("Res", res);
//   return res.json();
// })
// .then(res => {
//   console.log("Res", res);
//   return fetch(`http://localhost:3020/users/${res.data.users[0]}`);
// })
// .then(res => {
//   console.log("Res", res);
//   return res.json();
// })
// .then(res => {
//   console.log("Tes", res);
//   return fetch(`http://localhost:3020/todos/${res.data.todos[0]}`);
// })
// .then(res => {
//   console.log("Res", res);
//   return res.json();
// })
// .then(res => {
//   console.log("Res", res);
// })

// /* Promises

// pending
// fulfilled - 2
// rejected - 



// */

// let isOrderReady = true;

// let promise = new Promise(function(resolve, reject){
//   if (isOrderReady) {
//     resolve("Order is ready");
//   } else {
//     reject();
//   }
// });

// promise.then(function(res) {
//   console.log(res);
// }).catch()

// console.log("pr", promise);

let country = fetch("http://localhost:3020/countries/1");

country.then(res => {
  res.json().then(data => {
    let users = fetch(`http://localhost:3020/users/${data.data.users[0]}`);
    users.then(res => {
      res.json().then(data => {
        let todos = fetch(`http://localhost:3020/todos/${data.data.todos[0]}`);
        todos.then(res => {
          res.json().then(data => {
            console.log("Todos", data);
          })
        }).catch()
      })
    }).catch()
  })
}).catch()

console.log(country);