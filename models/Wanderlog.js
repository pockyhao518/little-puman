// As a part of this problem, we're going to build, piece-by-piece,
// the part of a relational database that can take a list of rows and
// sort them by multiple fields:

// i.e., the part that implements
//       ORDER BY name ASC, age DESC

// Step 1: we want to write a function that returns the record
//         with the smallest entry of a given key
//
//         Treat keys that don't exist as 0

function minByKey(arr, key) {
    // Your code goes here
    // let idx = 0;
    // let temp = arr[0][key];
    // for (let i = 0; i < arr.length; i++){
    //     let el = arr[i];
    //     if (!el[key] && temp >= 0){
    //         temp = 0;
    //         idx = i;
    //     }
    //     if (el[key] < temp){
    //         temp = el[key];
    //         idx = i;
    //     }
    // }
    // return arr[idx]
    return firstByKey(arr, key, 'asc')
}

let records = [
    { a: 2 },
    { a: 1, b: 4 },
    { a: 3, b: 1 },
    { a: -2, b: 2 },
    { b: 3 },
];

console.log("minByKey");
console.log(minByKey(records, "a")); // -> {a: -2, b: 2}
console.log(minByKey(records, "b")); // -> {a : 2};


// Step 2: we want to extend this so that it gets either the lowest
//         or the highest value:

//         Once done, refactor minByKey so that it uses firstByKey


function firstByKey(arr, key, direction) {
    let idx = 0;
    let temp = arr[0][key];
    if (direction === 'asc'){
        for (let i = 0; i < arr.length; i++) {
            let el = arr[i];
            if (!el[key] && temp > 0) {
                temp = 0;
                idx = i;
            }
            if (el[key] < temp) {
                temp = el[key];
                idx = i;
            }
        }
    }else{
        for (let i = 0; i < arr.length; i++) {
            let el = arr[i];
            if (!el[key] && temp < 0) {
                temp = 0;
                idx = i;
            }
            if (el[key] > temp) {
                temp = el[key];
                idx = i;
            }
        }
    }
    return arr[idx]
}

console.log("firstByKey");

console.log(firstByKey(records, "a", "asc")); // -> {a: -2, b: 2}
console.log(firstByKey(records, "b", "asc")); // -> {a : 2};

console.log(firstByKey(records, "a", "desc")); // -> {a: 3, b: 1}
console.log(firstByKey(records, "b", "desc")); // -> {a: 1, b: 4}
