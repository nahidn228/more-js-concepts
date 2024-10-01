let a = 5;

function add(num1, num2) {
  const result = num1 + num2 + a;
  return result;
}

const sum = add(4, 5);
console.log(sum);

/*
let x = 1;
let intervalId = setInterval(() => {
  console.log(x++);
  if (x > 3) clearInterval(intervalId);
}, 1000);

async function myFunction() {
  return "Hello";
}
myFunction().then(console.log);


try {
    console.log("Start");
    throw new Error("Error occurred");
   } catch (err) {
    console.log(err.message);
   } finally {
    console.log("End");
   }

   let message = "Hello!";
setTimeout(() => {
  message = "Goodbye!";
}, 0);
console.log(message);

 */