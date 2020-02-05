//*************************
//Løsning 2
const http = require('http');

const server = http.createServer((req, res) => {
  //console.log(`Received an incoming request from: ${req.url}`);
  //console.log(`with HTTP-method: ${req.method}`);
  const pathName = req.url;

  if (pathName === '/' || pathName === '/home') {
    res.end('<h1>Index Page</h1>');
  } else if (pathName === '/contact') {
    res.end('<h1>Contact Us at:</h1>');
  } else if (pathName === '/about') {
    res.end('<h1>Learn about us</h1>');
  } else if (pathName === '/hello') {
    res.end('<h1>Send Us an Email</h1>');
  } else if (pathName === '/error') {
    res.end("<h1>The page you wanted doesn't exist</h1>");
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html',
      'my-own-header': 'hello-world'
    });
    res.end('<h1>This is my 404, reguested url not found</h1>');
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening to request on port 3000');
});
