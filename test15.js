// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
    //happy coding!
    let n = A.length
    let counts = []
    if(n ===1){
        return A[0]
    }else{
        for(let i =0;i<n;i++){
            let count = 0
            for(let j=0;j<n;j++){
                if(A[i]===A[j]){
                    count++;
                }
            }
            counts.push(count)
        }
        for(let i = 0;i<n;i++){
            if(counts[i]%2!=0){
                return A[i]
            }
        }
        // return counts
    }

}
const a= [1,2,2,3,3,3,4,3,3,3,2,2,1]
// findOdd(a)
console.log(findOdd(a))





// for(let i = 0;i<n;i++){
//     for(let j= 0;j<n;j++){
// }
//     }