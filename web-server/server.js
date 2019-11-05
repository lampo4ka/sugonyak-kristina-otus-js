// содежимое index.js
const http = require('http');
const port = 3000;
const requestHandler = (request, response) => {
	//response.end('Hello Node.js Server!')
	response.setHeader("Content-Type", "text/html; charset=utf-8;");

	if(request.url === "/name" || request.url === "/"){
		response.write("<h2>Home</h2>");
	}
	else if (request.url === "/age"){
		response.write("<h2>Age</h2>");
	}
	else if (request.url === "/address"){
		response.write("<h2>Address</h2>");
	}
	else {
		response.write("<h2>404</h2>");
	}
	response.end();
	console.log(request.url, request.method);
};

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
	if (err) {
		return console.log('something bad happened', err)
	}
	console.log(`server is listening on ${port}`)
});
