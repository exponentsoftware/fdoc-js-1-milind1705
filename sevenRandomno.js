function sevenRandomNo() {
     var array = [];
     var sevenNumber = Math.floor(Math.random() * 10);
     while (array.length < 7) {
       for (let i = 0; i <= array.length; i++) {
         if (sevenNumber !== array[i]) {
           array.push(sevenNumber);
         }
       }
     }
     return sevenNumber;
   }
   
   console.log(sevenRandomNo());
   
