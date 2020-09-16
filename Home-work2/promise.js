function promiseReduce(asyncFunctions, reduce, initialValue) {
    let result = initialValue;
    let counter = 0;

    async function countPromise(index) {
        if (index === asyncFunctions.length) {
            console.log(result);
            return;
        }

        let aF = await asyncFunctions[index]();
        result = reduce(result, aF);
        counter++;
        countPromise(counter)
    }

    countPromise(counter)
}


const fn1 = () => Promise.resolve(1);
const fn2 = () => new Promise(resolve => {
    setTimeout(() => resolve(2), 1000)
});
promiseReduce([fn1, fn2], (memo, value) => memo * value, 2);
