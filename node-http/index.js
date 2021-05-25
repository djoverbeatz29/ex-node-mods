const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(`Request for ${req.url} via method ${req.method}...`);

    if (req.method === "GET") {
        const fileUrl = req.url === "/" ? "/index.html" : req.url;
        const filePath = path.resolve(`./public${fileUrl}`);
        const fileExt = path.extname(filePath);
        res.setHeader("Content-Type", "text/html");
        if (fileExt === ".html") {
            fs.access(filePath, (exists) => {
                if (!exists) {
                    res.statusCode = 404;
                    res.end(`<html><body><h1>Error 404: ${fileUrl} not found.</h1></body></html>`)
                    return;
                }
                else {
                    res.statusCode = 200;
                    fs.createReadStream(filePath).pipe(res);
                }
            })
        }
        else {
            res.statusCode = 404;
            res.end(`<html><body><h1>Error 404: ${fileUrl} not found.</h1></body></html>`)
            return;
        }
    }
    // res.statusCode = 200;
    // res.setHeader("Content-Type", "text/html");
    // res.end("<html><body><h1>E ai, mundo? Tubem?</h1></body></html>");
});

server.listen(port, hostname, function() {
    console.log(`O servidor roda na porta http://${hostname}:${port}`);
});