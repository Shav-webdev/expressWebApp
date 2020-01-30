const http = require('http');

console.log(__dirname)
console.log(__filename)

const server = http.createServer(((req, res) => {
    console.log(req.url);
    res.end("<h1>Hello world!!!</h1>")
}));

server.listen(3000, () => {
    console.log("Server has been started");
});