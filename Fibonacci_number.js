function fibonacci_inplace(index){
  if(index==0){
    return 0;
  }
  if(index==1){
    return 1;
  }

  var answer_0=0, answer_1=1;
  var answer;
  var i=2;
  while(i<=index){
    //answer.push(answer[i-2] + answer[i-1])
    answer = answer_0 + answer_1;
    answer_0=answer_1
    answer_1=answer
    i+=1

  }
  return answer
}


console.log(fibonacci_inplace(5))
console.log(fibonacci_inplace(10))
console.log(fibonacci_inplace(12))
console.log(fibonacci_inplace(0))
console.log(fibonacci_inplace(17))
console.log(fibonacci_inplace(1))
console.log(fibonacci_inplace(20))
