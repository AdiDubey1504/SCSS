// console.log("Start 1");

// async function fetchTodos() {
//   console.log("Start 3");
//   let country = await fetch(`http://localhost:3020/countries/1`);
//   console.log("Start 31");
//   country = await country.json();
//   console.log("Country", country);
//   let users = await fetch(`http://localhost:3020/users/${country.data.users[0]}`);
//   console.log("Start 32");
//   users = await users.json();
//   console.log("Users", users);
//   let todos = await fetch(`http://localhost:3020/todos/${users.data.todos[0]}`);
//   console.log("Start 33");
//   todos = await todos.json();
//   console.log("Todos", todos);
// }

// console.log("Start 2");

// fetchTodos();

// console.log("Start 4");

// async function test() {
//   console.log("Start 5");
//   let country = await fetch(`http://localhost:3020/countries/1`);
//   console.log("Start 51");
//   country = await country.json();
//   console.log("Country", country);
//   let users = await fetch(`http://localhost:3020/users/${country.data.users[0]}`);
//   console.log("Start 52");
//   users = await users.json();
//   console.log("Users", users);
//   let todos = await fetch(`http://localhost:3020/todos/${users.data.todos[0]}`);
//   console.log("Start 53");
//   todos = await todos.json();
//   console.log("Todos", todos);
// }

// console.log("Start 6");

// test();
// // console.log(test());

// console.log("Start 7");

async function fetchData() {
  try {
    let country = await fetch("http://localhost:3020/countries/1");
    country = await country.json();
  
    let users = await fetch(`http://localhost:3020/uers/${country.data.users[0]}`);
    users = await users.json();
  
    let todos = await fetch(`http://localhost:3020/todos/${users.data.todos[0]}`);
    todos = await todos.json();
  } catch (error) {
    console.log("Err", error);
  }
  console.log("Todos", todos);
}

console.log(fetchData());