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
	let count = 0;
	while (count < 10) {
		for (let options in optionsList) {
			const req = https.request(optionsList[options], (res) => {
				console.log('statusCode:', res.statusCode);
				console.log('headers:', res.headers);
				res.on('data', (chunk) => {
					console.log(`BODY: ${chunk}`);
				});
			});

			req.on('error', (e) => {
				console.error(e);
			});

			req.end();
		}
		count ++;
	}
};

requests();
