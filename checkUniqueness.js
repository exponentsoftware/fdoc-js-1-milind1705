function checkUniqueness(arr){
    for(let i= 0; i <= arr.length; i++){
        for(let j = i+1; j <= arr.length; j++){
            if(arr[i] == arr[j]){
                return false;
            }else {
                return true;
            }
        }
    }
}

const arrOne = [1, 4, 6, 2, 1];
console.log(checkUniqueness(arrOne));

const arrTwo = [4, 6, 2, 3]
console.log(checkUniqueness(arrTwo));
