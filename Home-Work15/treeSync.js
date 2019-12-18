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

const folderPath = './TestDirectory';



//определяет, является ли объект файлом
const isFile = (fileName) => {
	return new Promise((resolve, reject) => {
		fs.lstat(fileName, (err, stat) => {
			resolve (stat.isFile())
		});
	});
};

const getFullDirContent = async (dirPath, array = []) => {

	const  promise = new Promise((res, rej) => {
		fs.readdir(dirPath, (err, dirContent ) => {
				if (dirContent.length !== 0) {
					Promise.all(dirContent.map( async dirElem => {
						debugger;
						const dirElemPath = path.join(dirPath, dirElem);

						if( await isFile(dirElemPath)) {
							array.push(dirElemPath);
						}
						else {
							array.push(dirElemPath);
							await getFullDirContent(dirElemPath, array);
						}
					})
					)
				}
			});
		res (array) ;
	});

	const  result = await promise;
	console.log(result)
	
};

//
// getFullDirContent('./TestDirectory')
// 		.then((ok) => {
// 			console.log(ok)
// 		});

console.log(getFullDirContent('./TestDirectory'));


// getFullDirContent('./TestDirectory')
const getFullDirContentArray = async () => {
	const dirArray = [];
	const fileArray = [];
	const arr = [];

	await getFullDirContent('./TestDirectory').map( async el => {
		if (await isFile(el)) {
			fileArray.push(el);
		} else {
			dirArray.push(el);
		}
	});
	arr.push(fileArray);
	arr.push(dirArray);
	return arr;
};


const printDirFullContent = () => {
	const data =  {
		files: getFullDirContentArray()[0],
		dir: getFullDirContentArray()[1]
	};
	return JSON.stringify(data);

};


// console.log(filesNameArray());
// console.log (dirNameArray());

// printDirFullContent().then(console.log);
// console.log(
// 	getFullDirContent('./TestDirectory')
// 		.then((ok) => {
// 			return ok
// 		})
// );
//
// console.log(getFullDirContentArray());

// getFullDirContent('./TestDirectory').then(function(result) {
// 	console.log(result)
// });
