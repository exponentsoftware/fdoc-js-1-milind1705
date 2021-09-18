function reverseArray(arr){
    const reverse = [];
    for(let i = arr.length-1; i >= 0; i--){
        reverse.push(arr[i])
    }
    return reverse;
}

const array = ["a", "b", "c"];

console.log(reverseArray(array));