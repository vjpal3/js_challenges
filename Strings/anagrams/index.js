// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str
            .replace(/[^\w]/g, '')
            .toLowerCase()
            .split('')
            .sort()
            .join();
}

// function anagrams(stringA, stringB) {
//     const strA = alphaLowerCase(stringA);
//     const strB = alphaLowerCase(stringB);

//     if(strA.length !== strB.length)
//         return false;

//     const charMapA = buildCharMap(strA);
//     const charMapB = buildCharMap(strB);

//     if(Object.keys(charMapA).length !== Object.keys(charMapB).length) 
//         return false;

//     for (let key in charMapA) {
//         if (charMapA[key] !== charMapB[key])
//             return false;
//     }
//     return true;
// }

// function buildCharMap(str) {
//     const charMap = {};
//     for (let char of str) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
// }

// function alphaLowerCase(str) {
//     return str.replace(/[^\w]/g, '').toLowerCase();
// }

module.exports = anagrams;
