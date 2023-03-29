const http = require("http");
const app = http.createServer((req,res)=>{
    res.end("this is the way you learn, be alert ")
})

app.listen(8000,()=>{
    console.log("server listening on port 8000");
})