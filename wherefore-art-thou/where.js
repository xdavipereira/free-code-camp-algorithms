/*jshint esversion: 6 */
function whatIsInAName(collection, source) {
    // What's in a name?
    let arr = [];

    // Only change code below this line
    let keys = {};
    keys = Object.keys(source);

    for (let i = 0; i < collection.length; i++) {
        let a = collection[i];
        let v = false;

        for (let i = 0; i < keys.length; i++) {
            let prop = keys[i];
            if (a.hasOwnProperty(prop) === false) {
                console.log('x');
                v = false;
            } else {
                if (a[prop] === source[prop]) {
                    console.log("z");
                    v = true;
                }
            }
        }

        if (v === true) {
          arr.push(a);
        }

    }
    return arr;
    // Only change code above this line
}
whatIsInAName([{
    first: "Romeo",
    last: "Montague"
}, {
    first: "Mercutio",
    last: null
}, {
    first: "Tybalt",
    last: "Capulet"
}], {
    last: "Capulet"
});

// whatIsInAName([{
//     "a": 1,
//     "b": 2
// }, {
//     "a": 1
// }, {
//     "a": 1,
//     "b": 2,
//     "c": 2
// }], {
//     "a": 1,
//     "c": 2
// });
