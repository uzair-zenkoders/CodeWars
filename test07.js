// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
    let abc = number
    let numbers = []
    let multiples= []
    let sumOfMultiples= 0 
    if (number<0){
        return 0
    }else{
        for(let i = 0;i<= number;i++){
            numbers.push(i)
        }
    }
    for (let i = 0;i<numbers.length-1; i++){
        if(numbers[i]%3===0 || numbers[i]%5===0){
            multiples.push(numbers[i])
            sumOfMultiples+= numbers[i]
        }
    }
    return sumOfMultiples
}

console.log(a= solution(10))

// function solution(number){
//     var sum = 0;
    
//     for(var i = 1;i< number; i++){
//       if(i % 3 == 0 || i % 5 == 0){
//         sum += i
//       }
//     }
//     return sum;
//   }