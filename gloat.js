const prompt = require('prompt');
prompt.start();


console.log("Please enter numbers")

const numbers = [
    'num1', 'num2', 'num3', 'num4'
];

prompt.get(numbers, function (err, result) {
    if (err) {
        return onErr(err);
    }
    let arr = []
    arr [0] = result.num1
    arr [1] = result.num2
    arr [2] = result.num3
    arr [3] = result.num4

    console.log(' numbers: ' + arr.join());

    function maxMax (arr, numOfValues) {
        let result = []
        for(let i =0; i < numOfValues; i++ ){
            result.push(arr.splice(arr.indexOf(Math.max(...arr)),1))
        }
        return result;
    }

    console.log("2 max numbers" + maxMax(arr,2))
});

