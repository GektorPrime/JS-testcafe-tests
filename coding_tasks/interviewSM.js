/*
Manually implement indexOf().
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack. You cannot use any built in functions like indexOf() or strStr()
Example 1:
Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:
Input: haystack = "aaaaa", needle = "bba"
Output: -1
    Template:
def indexOf(haystack: str, needle: str) -> int:
*/

// function occNeedle (haystack, needle) {
//     //letters = haystack.split()
//     for (let i=0; i < haystack.length; i++) {
//       if (haystack[i] === needle) {
//         console.log (i);
//       } else {
//         console.log (-1);
//       }
//     }
// };
  
// occNeedle("hello", "ll")

function indexes(source, find) {
    if (!source) {
      return [];
    }
    if (!find) {
        return [];
        //return source.split('').map(function(_, i) { return i; })
    }
    var result = [];
    var i = 0;
    while(i < source.length) {
      if (source.substring(i, i + find.length) == find) {
        result.push(i);
        i += find.length;
      } else {
        i++;
      }
    }
    return result;
  }
  console.log(indexes('So, hi my name is hitler', 'hi'))