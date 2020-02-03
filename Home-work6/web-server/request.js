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


function requestAsync (options) {
	const req = https.request(options, (res) => {
		console.log('statusCode:', res.statusCode);
		res.on('data', (chunk) => {
			console.log(`BODY: ${chunk}`);
		});

		req.on('error', (e) => {
			console.error(e);
		});

		req.end();
	});
	return new Promise((resolve, reject) => resolve(req.end()));
}


async function getResponse() {
	optionsList.forEach(await requestAsync);
	// const data1 = await requestAsync(options);
	// const data2 = await requestAsync(options);

	//console.log(data1);

}
// let count = 0;
// while (count < 10) {
// 	for (let options in optionsList) {
// const req = https.request(optionsList[options], (res) => {
// 	console.log('statusCode:', res.statusCode);
// 	console.log('headers:', res.headers);
// 	res.on('data', (chunk) => {
// 		console.log(`BODY: ${chunk}`);
// 	});
// });


getResponse();
