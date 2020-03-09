console.log("Hello");

function begin(cb) {
  console.log("I'm starting with the task");
  cb(finish);
}

function execute(cb) {
  setTimeout(function() {
    console.log("I'm executing the task");
    cb();
  }, 2000);
}

function finish() {
  console.log("I'm done with the task");
}

// begin(execute);

let begin1 = new Promise(function(resolve, reject){resolve(2)});

begin1
.then(function(val) {
  console.log("I'm starting with the task");
})
.then(function(val) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log("I'm executing the task");
    }, 2000);
    setTimeout(function() {
      resolve(2);
    }, 4000);
  })
})
.then(function(val) {
  console.log("I'm done with the task");
})
.catch(function(val) {
  console.log("Catch", val);
})

console.log("221", begin1);

console.log("3232", begin1
.then(function(val) {
  console.log("I'm starting with the task");
})
.then(function(val) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log("I'm executing the task");
    }, 2000);
    setTimeout(function() {
      reject(2);
    }, 4000);
  })
}));