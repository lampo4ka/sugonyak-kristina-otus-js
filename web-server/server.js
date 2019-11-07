const http = require('http');
const fs = require('fs');



const port = 3000;

//const  setResponse = (err, content) => {};
const requestHandler = (request, response) => {
	//response.setHeader("Content-Type", "text/html; charset=utf-8;");

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
		fs.readFile(`${ __dirname }/responses/address.html`, function (err, content) {
			if (!err) {
				response.setHeader('Content-Type', 'text/html');
				response.write(content);
			}
			response.end();
		});
	}
	else {
		fs.readFile(`${ __dirname }/responses/nopage.html`, function (err, content) {
			if (!err) {
				response.setHeader('Content-Type', 'text/html');
				response.write(content);
			}
			response.end();
		});
	}
	//response.end();//нужна функция, которая передает запрос и делает с ним что-то дальше
	console.log(request.url, request.method);
};

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
	if (err) {
		return console.log('something bad happened', err)
	}
	console.log(`server is listening on ${port}`)
});
