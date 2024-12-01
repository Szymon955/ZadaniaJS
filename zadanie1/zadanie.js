const processText = (text, {uppercase = false, reverse = false, removeSpecialChars = false} = {}) => {
    let result = [...text];

if(uppercase){
    result = result.map(char => char.toUpperCase());
}

if(reverse){
    result = result.reverse();
}

if(removeSpecialChars){
    result = result.filter(char => /[a-zA-Z0-9]/.test(char));
}

return result.join('');

}

console.log(processText("Hello, World!", { uppercase: true }));
console.log(processText("Hello, World!", { reverse: true }));
console.log(processText("Hello, World!", { removeSpecialChars: true }));




