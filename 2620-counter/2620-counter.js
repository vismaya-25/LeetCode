var createCounter=function(n){
    return function(){
        return n++;
    }
}
var counter=createCounter(1)
console.log(counter())
console.log(counter())
