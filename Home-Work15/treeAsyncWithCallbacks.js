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

const folderPath = process.argv[2];


const getFullDirContent = async (dirPath, array = []) => {
	debugger;
		const promise = new Promise((res, rej) => {
		fs.readdir(dirPath, {withFileTypes:true}, (err, dirContent ) => {
			if (dirContent.length !== 0 && !err) {
				dirContent.forEach(async dirElem => {
					if (dirElem.isDirectory()) {
						const dirElemPath = path.join(dirPath, dirElem.name);
						array.push(dirElemPath);
						res (array);
						await getFullDirContent(dirElemPath, array);
					} else {
						const dirElemPath = path.join(dirPath, dirElem.name);
						array.push(dirElemPath);
					}
				})
			} else {
				console.log('err')
			}
		});
	});

		const result = await promise;
		return result;

};



getFullDirContent(folderPath).then(console.log);

// не получается реализовать ассинхронность
// что-то не так с рекурсией
