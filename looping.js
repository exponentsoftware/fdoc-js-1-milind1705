function loopingTriangle(n){
//    for(let i = 1; i <= n; i++){
//        for(let j = 1; j <= i; j++){
//            console.log("#")
//        }
//    }

let hash = "#"
while (hash.length < n){
    console.log(hash);
    hash = hash + "#"
}
}

loopingTriangle(7);