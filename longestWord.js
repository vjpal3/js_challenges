function longestWord(str) {
    return str.split(' ').sort((a,b) => a.length < b.length)[0].length
}
OR:
function longestWord(str) {
    return str.split(' ').sort((a,b) => b.length - a.length)[0].length
 }

longestWord("The quick brown fox jumped over the lazy dog")
6
longestWord("What is the average")
7