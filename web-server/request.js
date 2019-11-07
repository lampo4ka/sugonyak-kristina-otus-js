const https = require('http');

// const options = {
// 	hostname: 'localhost',
// 	port: 3000,
// 	path: '/nopage',
// 	method: 'GET'
// };

const optionsList = [
	{
		hostname: 'localhost',
		port: 3000,
		path: '/name',
		method: 'GET'
	},
	{
		hostname: 'localhost',
		port: 3000,
		path: '/address',
		method: 'GET'
	},
	{
		hostname: 'localhost',
		port: 3000,
		path: '/nopage',
		method: 'GET'
	},

];


// optionsList.forEach(options => (
// 	https.request(options, res => {
// 		console.log('statusCode:', res.statusCode);
// 		console.log('headers:', res.headers);
// 	})
// ));


const requests = () => {
	for (let options in optionsList) {
		const req = https.request(options, (res) => {
			console.log('statusCode:', res.statusCode);
			console.log('headers:', res.headers);
		});

		req.on('error', (e) => {
			console.error(e);
		});

		req.end();
	}
};

requests();
