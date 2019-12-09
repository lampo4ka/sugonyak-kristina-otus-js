// получить на вход path
// прочитать содержимое path -> вывести (прежде чем как-то взаимодействоать с файломи необходимо получить дескриптор файла)


/*
{
"files": [
    "foo/f1.txt",
    "foo/f2.txt",
    "foo/bar/bar1.txt",
    "foo/bar/bar2.txt"
], "dirs": [
    "foo",
    "foo/bar",
    "foo/bar/baz"
]
}
*/

const fs = require('fs');
const path = require('path');
// fs.open('/Users/sugonyak/Documents/JS/sugonyak-kristina-otus-js/Home-Work15/TestDirectory/weather.json', 'r', (err, fd) => {
// 	//fd - это дескриптор файла
// });
//
// fs.stat('/Users/sugonyak/Documents/JS/sugonyak-kristina-otus-js/Home-Work15/TestDirectory/weather.json', (err, stats) => {
// 	if (err) {
// 		console.error(err);
// 		return
// 	}
// 	console.log(stats.isFile());
// 	console.log(stats.isDirectory());
// 	console.log(stats.size);
// });

// const notes = '/Users/sugonyak/Documents/JS/sugonyak-kristina-otus-js/Home-Work15/TestDirectory';
// console.log(path.dirname(notes));
// console.log(path.basename(notes));
// console.log(path.extname(notes));

const folderPath = './TestDirectory';
//console.log(fs.readdirSync(folderPath));

// const fullPath = fs.readdirSync(folderPath).map(fileName => {
// 	return path.join(folderPath, fileName)
// });

//определяет, является ли объект файлом
const isFile = fileName => {
	return fs.lstatSync(fileName).isFile()
};

const filesNameArray = () => {
	const fullPath = fs.readdirSync(folderPath).map(fileName => {
		return path.join(folderPath, fileName)}).filter(isFile);
	//console.log(fullPath);
	return fullPath;
};

const dirNameArray = () => {
	const fullPath = fs.readdirSync(folderPath).map(fileName => {
		return path.join(folderPath, fileName)});
	const fullDirPath = fullPath.map((el) => {
		if(!isFile(el)) {
			return el;
		}
	}).filter(Boolean);
	// console.log(fullDirPath);
	return fullDirPath;
};


// export const setResponse = priceList => {
// 	const data = {
// 		meta: { status: 'success' },
// 		response: {
// 			all: setBarPrice(priceList),
// 		},
// 	};
// 	return JSON.stringify(data);
// };

const getDirFullContent = () => {
	const data = {
		files: filesNameArray(),
		dir: dirNameArray()
	};
	return JSON.stringify(data);

};


// console.log(filesNameArray());
// console.log (dirNameArray());

console.log(getDirFullContent());

