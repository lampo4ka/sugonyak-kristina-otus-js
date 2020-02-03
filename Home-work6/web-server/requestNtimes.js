const https = require('http');
const N = process.argv[2];
const syncFlag = process.argv[3];

const options = {
	hostname: 'localhost',
	port: 3000,
	path: '/name',
	method: 'GET'
};


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


async function getResponseAsync(options) {

	let i = 0;
	while (i < N) {
		await requestAsync (options);
		i++;
	}
}

function request(options) {
	const req = https.request(options, (res) => {
		console.log('statusCode:', res.statusCode);
		res.on('data', (chunk) => {
			console.log(`BODY: ${chunk}`);
		});
	});

	req.on('error', (e) => {
		console.error(e);
	});

	req.end();
}


function getResponseSync(options) {

	let i = 0;
	while (i < N) {
		request(options);
		i++;
	}
}

if (syncFlag === 'S') {
	getResponseSync(options)
} else {
	getResponseAsync(options);
}
