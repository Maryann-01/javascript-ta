// complete the function
function prime (num) {
    // code goes 
      num=parseInt(prompt("Enter a number:"))
    
  
    let isPrime=true;
    if(num<=1){
      console.log("It is not a prime number")
    }
    for (let i=2;i<num;i++){
      if(num%i==0){
       return isPrime=false;
      }
     return isPrime=true;
  
    }
  }
  prime()
  //END OF CODE
  
  function solution (arg) {
    return prime(arg);
  }
  
  if (typeof require !== "undefined" && require.main === module) {
    if (process.argv.length <= 2) {
      throw Error("Require argument");
    }
  
    const arg = process.argv[2];
    console.log(solution(arg));
  }
  
  module.exports = { solution };
  
  
  