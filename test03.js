// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a,b) {
    let sum = a + b
    let binSum = ""
    remainders = []

    while (sum >0){
        if (sum%2===0){
            remainders.push(0)
        }else if(sum%2===1){
            remainders.push(1)
        }
        sum = Math.floor(sum/2)
    }
    reversed = []
    for (let i = remainders.length-1; i>=0; i--){
        reversed.push(remainders[i])
    }
    binSum = reversed.join(""); // Convert array of binary digits to string
    console.log(binSum)
    return binSum;
  }

  addBinary(50,50)