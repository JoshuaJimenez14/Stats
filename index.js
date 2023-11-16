function getLength(arr){
    return arr.length;
    
  }
  
    function getSum(arr){
        let sum = 0;
        for(let i = 0; i< arr.length; i++){
        sum = sum + arr[i];
        }
        return sum;
    }
    function getMean(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        }
      
        let mean = sum / arr.length;
        return mean;
    }
    function getMin(arr) {
        let min = arr[0];

        for (let i = 0; i < arr.length; i++) {
          if (arr[i] < min) 
            min = arr[i];
        }
      
        return min;
    }
  function getMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) 
        max = arr[i];
      
    }
  
    return max;
  }
  function getRange(arr){

    let min = getMin(arr);
    let max = getMax(arr);
  
    return max - min;
  }
function getEvens(arr){
  
}
  const numbers = [1, 3, 5, 8];

  console.log(`You have given ${getLength(numbers)} numbers.`);

  console.log(`The sum of your numbers is ${getSum(numbers)}.`);

  console.log(`The mean of your numbers is ${getMean(numbers)}.`);

  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);

  console.log(`The largest of your numbers is ${getMax(numbers)}.`);

  console.log(`The range of your numbers is ${getRange(numbers)}.`);

  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  /*
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
*/