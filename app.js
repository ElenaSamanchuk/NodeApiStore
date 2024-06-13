const http = require('http');
const fs = require('fs');
const path = require('path');
const types = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.png': 'image/png'
}
http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            staticFile(res, 'index.html', '.html');
            break;
        case '/form':
            staticFile(res, 'form.html', '.html');
            break;
        case '/cart':
            staticFile(res, 'cart.html', '.html');
            break;
        default:
            const ext = path.extname(req.url);
            if (ext in types) {
                staticFile(res, req.url, ext);
            } else {
                res.statusCode = 404;
                res.end();
            }
    }
}).listen(3000);
function staticFile(res, file, ext) {
    res.setHeader('Content-Type', types[ext]);
    fs.readFile('./public/'+file, (error, data) => {
        if (error) {
            res.statusCode = 404;
            res.end();
        }
        res.end(data);
    });
}