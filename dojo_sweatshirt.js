function cost(num){
   var discount=[0,0.09,0.19,0.35];
   return Math.ceil(num*20*(1-discount[Math.min(num-1,3)]));
}
console.log(cost(1))
console.log(cost(2))
console.log(cost(3))
console.log(cost(4))
