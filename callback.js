let countries = [1,2,3];

// function fetchCountry(id) {
//   let xhttp = new XMLHttpRequest();
//   xhttp.open("GET", `http://localhost:3020/countries/${id}`);
//   xhttp.send();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       let country = JSON.parse(xhttp.responseText);
//       let usersxhttp = new XMLHttpRequest();
//       usersxhttp.open("GET", `http://localhost:3020/users/${country.data.users[0]}`);
//       usersxhttp.send();
//       usersxhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//           let user = JSON.parse(usersxhttp.responseText);
//           let todosxhttps = new XMLHttpRequest();
//           todosxhttps.open("GET", `http://localhost:3020/todos/${user.data.todos[0]}`);
//           todosxhttps.send();
//           todosxhttps.onreadystatechange = function() {
//             if (this.readyState == 4 && this.status == 200) {
//               let todo = JSON.parse(todosxhttps.responseText);
//               console.log("Todo", todo);
//             }
//           }
//           console.log("User", user);
//         }
//       }
//     }
//   };
// }

function fetchData() {
  // 1. Call the Countries api
  // 2. Call the users api
  // 3. Call the todos api
  let countryxml = new XMLHttpRequest();
  countryxml.open("GET", "http://localhost:3020/countries/1");
  countryxml.send();
  console.log("Countryxml", countryxml);
  countryxml.onreadystatechange = function() {
    console.log("State changed");
    if (this.status === 200) {
      let country = JSON.parse(this.responseText);
      console.log("Country", country);
      let usersxml = new XMLHttpRequest();
      usersxml.open("GET", `http://localhost:3020/users/${country.data.users[0]}`);
      usersxml.send();
      usersxml.onreadystatechange = function() {
        if (this.status === 200) {
          let user = JSON.parse(this.responseText);
          let todosxml = new XMLHttpRequest();
          todosxml.open("GET", `http://localhost:3020/todos/${user.data.todos[0]}`);
          todosxml.send();
          todosxml.onreadystatechange = function() {
            if (todosxml.status === 200) {
              console.log(JSON.parse(todosxml.responseText));
            }
          }
        }
      }
    }
  }
}

fetchData();