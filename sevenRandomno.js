function sevenRandom(n,m){
var sevenNumber = [];
while(sevenNumber.length != 7){
    // for(let i=0; i < sevenNumber.length; i++){
    var number = Math.floor(Math.random());
   if(n<number<m){
        if(!sevenNumber[i]){
            sevenNumber.push(number)
           }
     // }

   }
} return sevenNumber;

}

console.log(sevenRandom(0,9))