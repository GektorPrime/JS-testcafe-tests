// var numbers = [4, 9, 16, 25];
// var x = numbers.map(myFunction);
// function myFunction (num) {
//     return num = num + 1
// };
// console.log(x)

// var fruits = ["apple", "orange", "cherry"];
// fruits.forEach(myFunction2);

// function myFunction2(item, index) {
//   console.log( index + ":" + item );
// }

// // Given a name, return a string with the message:
// // One for X, one for me.
// // Where X is the given name.
// // However, if the name is missing, return the string:
// // One for you, one for me.

// function returnStr(name) {
//     if (name != undefined) {
//         console.log(`One for ${name}, one for me`)
//     } else {
//         console.log('One for you, one for me')
//     };
// };
// returnStr('Alice');
// returnStr(123);
// returnStr();

// Determine if a sentence is a pangram. A pangram is a sentence using every letter of the alphabet at least once.
// The best known English pangram is:
// The quick brown fox jumps over the lazy dog.

let p = 'The quick brown fox jumps over the lazy dogg'
function pangram (sentence) {
    let splited = sentence.replace(/\s/g, '').split("")
    console.log(splited);
    let deleted = [];
    while (deleted != 0) {
        for (i=0; i < splited.length; i++ ) {
            if (splited[i] != splited[i+1]) {
                console.log('true');
                return deleted = splited.shift();
            } else {
                console.log('false');
                break;
            };
        };
    };
}
pangram (p)
