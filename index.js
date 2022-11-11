const http = require('http');
const PORT = process.env.PORT || 4000

http.createServer((req,res)=>{
    res.write(`<h1>Hello vikrams</h1>`);
    res.end();
}).listen(PORT, ()=>{
    console.log(`Server run on ${PORT}`)
})