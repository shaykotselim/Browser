console.log(111);
console.log(222);
console.log(333);
setTimeout(()=>{console.log(6666);},5000)
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
console.log(444);
console.log(555);
for(let i = 0; i<100000; i++){
    console.log(i);
}