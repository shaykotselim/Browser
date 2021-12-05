console.log('clock');
// setInterval(()=>{
//     console.log('tik');
// },1000)

let second = 0;
const timeid = setInterval(()=>{
    // second++;
    // console.log(second++);
    console.log(++second);
    if(second > 14){
        clearInterval(timeid)
    }
},1000)

console.log('second');
