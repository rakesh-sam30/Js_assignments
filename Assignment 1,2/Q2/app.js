function delayedCallback(callback) {
  setTimeout(callback, 2000);
}

function sayHello() {
  console.log("Hello after 2 seconds!");
}

delayedCallback(sayHello);
