function anagram(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
        console.log('true')
        console.log(reverse)
    } else{
        console.log('false')
        console.log(reverse)
    };        
}
anagram('cat');
anagram('doggod');

