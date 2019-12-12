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
// console.log(fs.readdirSync(folderPath));


// console.log(fullPath);

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

/*
1. Пока каждый элемент массива (содержание folderPath) не равен файлу
	//делать проверку на то, является ли он файлом
	//если файл, то вывести в массив
	//вывести в массив то, что проверялось на файл

 */

const getFullDirContent = (dirPath, array) => {
	array = array || [];
	const dirContent = fs.readdirSync(dirPath);
	if (dirContent.length !== 0) {
		dirContent.map(dirElem => {
			debugger;
			const dirElemPath = path.join(dirPath, dirElem);

			if(isFile(dirElemPath)) {
				array.push(dirElemPath);
			}
			else {
				array.push(dirElemPath);
				getFullDirContent(dirElemPath, array);
			}
		});
		return array;
	}
};

const getFullDirContentArray = () => {
	const dirArray = [];
	const fileArray = [];
	const arr = [];

	getFullDirContent('./TestDirectory').map(el => {
		if (isFile(el)) {
			fileArray.push(el);
		} else {
			dirArray.push(el);
		}
	});
	arr.push(fileArray);
	arr.push(dirArray);
	return arr;
};

//
// const dirNameArray = () => {
// 	const fullPath = fs.readdirSync(folderPath).map(fileName => {
// 		return path.join(folderPath, fileName)});
// 	const fullDirPath = fullPath.map((el) => {
// 		if(!isFile(el)) {
// 			fs.readdirSync(el).map(fileName => {
// 		return path.join(el, fileName)});
// 		}
// 	}).filter(Boolean);
// 	// console.log(fullDirPath);
// 	return fullDirPath;
// };

const printDirFullContent = () => {
	const data = {
		files: getFullDirContentArray()[0],
		dir: getFullDirContentArray()[1]
	};
	return JSON.stringify(data);

};


// console.log(filesNameArray());
// console.log (dirNameArray());

console.log(printDirFullContent());
// console.log(getFullDirContent('./TestDirectory'));
//
// console.log(getFullDirContentArray());

