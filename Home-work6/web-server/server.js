const http = require('http');
const fs = require('fs');
const port = 3000;

const requestHandler = (request, response) => {

	if(request.url === '/name'){
		fs.readFile(`${ __dirname }/name.html`, function (err, content) {
			if (!err) {
				response.setHeader('Content-Type', 'text/html');
				response.write(content);
			} else {
				response.statusCode = 500;
				response.write('An error has ocurred');
			}

			response.end();
		});
	}
	else if (request.url === "/address"){
		fs.readFile(`${ __dirname }/address.html`, function (err, content) {
			if (!err) {
				response.setHeader('Content-Type', 'text/html');
				response.write(content);
			}
			response.end();
		});
	}
	else {
		fs.readFile(`${ __dirname }/nopage.html`, function (err, content) {
			if (!err) {
				response.setHeader('Content-Type', 'text/html');
				response.write(content);
			}
			response.end();
		});
	}
	console.log(request.url, request.method);
};

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
	if (err) {
		return console.log('something bad happened', err)
	}
	console.log(`server is listening on ${port}`)
});
