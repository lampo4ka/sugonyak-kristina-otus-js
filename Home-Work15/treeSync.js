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

//аргумент, переданный из консоли
const folderPath = process.argv[2];

//определяет, является ли объект файлом
const isFile = fileName => {
	return fs.lstatSync(fileName).isFile()
};

const isSymbolicLink = fileName => {
	return fs.lstatSync(fileName).isSymbolicLink()
};

// собирает содержимое folderPath в массив
const getFullDirContent = (dirPath, array) => {
	array = array || [];
	const dirContent = fs.readdirSync(dirPath);
	if (dirContent.length !== 0) {
		dirContent.map(dirElem => {
			debugger;
			const dirElemPath = path.join(dirPath, dirElem);

			if(isFile(dirElemPath) || isSymbolicLink(dirElemPath)) {
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

// разбивает результат getFullDirContent() на массив с директориями и массив с файлами
const getFullDirContentArray = () => {
	const dirArray = [];
	const fileArray = [];
	const arr = [];

	getFullDirContent(folderPath).map(el => {
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

// формирует json объект с директориями и файлами из getFullDirContentArray()
const printDirFullContent = () => {
	const data = {
		files: getFullDirContentArray()[0],
		dir: getFullDirContentArray()[1]
	};
	return JSON.stringify(data);

};

console.log(printDirFullContent());

