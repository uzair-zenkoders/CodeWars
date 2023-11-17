// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
    //code 
    let shownum = num.toString().split('')
    let count = 0
    if (shownum.length == 1){
        console.log(num)
    }else{
        let prod = 1;
        // count++;
        for(let i = 0;i<shownum.length; i++){
            prod = shownum[i] * prod
        }
        // return count + persistence(prod);
        return persistence(prod, count + 1);
    }

 }

 persistence(39)
