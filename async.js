//syncwork
// const fs = require('fs');
// fs.writeFileSync('text.txt','This can be your next Mio',(err)=>{
// console.log("file created");
// });// callback(A Callback is pass as an argument when the asynchrounous operation is completed)
// const bufdata = fs.readFileSync('text.txt')
// console.log(bufdata);    //first <Buffer 54 68 69 73 20 63 61 6e 20 62 65 20 79 6f 75 72 20 6e 65 78 74 20 4d 69 6f>
// console.log("Welcome To Mio World");//second Output

const fs = require('fs');
fs.writeFile('text.txt','This can be your next Mio',(err)=>{
console.log("file created");
});// callback(A Callback is pass as an argument when the asynchrounous operation is completed)
fs.readFile('text.txt','utf-8',(err,data)=>{
    console.log(data);
})
console.log("Welcome To Mio World");

fs.writeFile("read.txt", "When file is a filename,", ()=>{
    console.log("created a read.txt file in async way");
})
fs.readFile('read.txt',"utf-8", (err,data)=>{
console.log(data);

})