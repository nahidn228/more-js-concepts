
//Promise and Await
const myLoader = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random();
    if (success <= 0.5) {
      resolve(success);
    } else {
      reject(success);
    }
  });
};
myLoader()
  .then((result) => {
    console.log("Resolved With", result);
  })
  .catch((err) => {
    console.log("Rejected with", err);
  });

const loadData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
};

loadData();



