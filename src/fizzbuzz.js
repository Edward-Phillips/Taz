function fizzbuzz(input){
  let answer= ""; 
  if (input % 3 === 0) {
    answer += "fizz";
  } 
  if (input % 5 === 0) {
    answer += "buzz"
  }
  if (answer.length !== 0) {
    return answer
  }
  return  input}


module.exports = fizzbuzz;