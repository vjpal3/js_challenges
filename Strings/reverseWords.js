const reverseWords = (phrase) => {
    const words = 
        phrase.split(' ')
            .map(word => {
                wordArr = word.split('');
                for (let i = 0; i < wordArr.length; i++) {
                    wordArr.splice(i, 0, wordArr.pop());
                }
                return wordArr.join('');
            });
    return words.join(' ');
} 

console.log(reverseWords("I Love JavaScript!"));

// Because every character is visited and the required temporary variable 
// grows proportionately to the input string, 
// the time and space complexities are linear.