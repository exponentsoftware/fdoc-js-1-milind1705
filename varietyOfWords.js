function varietyOfWords(str){
    var splitString = str.split(' ');
    var veriousWord = [];
    var exists = {};
    var elm;

    for(let i =0; i < splitString.length; i++){
        elm = splitString[i];
        if(!exists[elm] ){
            veriousWord.push(splitString[i]);
            exists[elm] = true;
        }
    }
    return veriousWord.length;
}

const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
console.log(varietyOfWords(sentence));