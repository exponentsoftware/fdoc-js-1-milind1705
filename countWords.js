const paragraph = 'I you love teaching. If love you do not love teaching what else can you love . I love JavaScript if you do not love something which can give life to your application what else can you love .'

function countWords(string, wrd1, wrd2){
    var splitString = string.split(" ");
    var word1 = [];
    var word2 = [];
    for(let i= 0; i < splitString.length; i++){
        if(wrd1 == splitString[i]){
            word1.push(splitString[i]);
        }
       
        if(wrd2 == splitString[i]){
            word2.push(splitString[i]);
        }
    }
   if(word1.length > word2.length){
       return wrd1;
   } else if(word1.length < word2.length){
       return wrd2;
   }else if (word1.length = word2.length){
    return "both are equal"
}

}

console.log(countWords(paragraph, "you", 'love'));


