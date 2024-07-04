function checkInteger(number) {
  if (!Number.isInteger(number)) {
    throw new Error("The provided value is not an integer");
  }
  console.log("The provided value is an integer");
}

checkInteger(11);
checkInteger(4.5);
