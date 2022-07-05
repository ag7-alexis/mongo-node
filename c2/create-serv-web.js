const http = require("http");

const host = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.writeHead(200);

    res.end("My first server!");
});

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
