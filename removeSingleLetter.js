function countWords(str, wrd1, wrd2){
    var splitString = str.split(' ');
    var newArr = [];
    for(let i =0; i< splitString.length; i++){
        if(splitString[i] != wrd1 && splitString[i] != wrd2){
            newArr.push(splitString[i]);
        }
    }

    return newArr.length;
}


const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
console.log(countWords(sentence, "I", "a"));