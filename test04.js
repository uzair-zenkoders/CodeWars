// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let newStr = str.toLowerCase()
    let string = newStr.split('')
    let xCount= 0
    let oCount = 0
    for (let i =0; i<string.length;i++){
        if (string[i]=='x'){
            xCount++
        }else if(string[i]=='o'){
            oCount++
        }
    }
    console.log(xCount===oCount ? true:false)
    return xCount === oCount;
  }

  XO("xOOOOx")