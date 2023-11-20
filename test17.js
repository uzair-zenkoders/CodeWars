// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
    // TODO
    // return {};
    let strings = string.split('')
    let final = {}
    let unique = []
    for (let i=0;i<strings.length;i++){
        if(!unique.includes(strings[i])){
            unique.push(strings[i])
        }
    }
    for (let i=0;i<unique.length;i++){
        let count = 0
        for(let j=0;j<strings.length;j++){
            if (unique[i]===strings[j]){
                count++;
            }
        } final[unique[i]]= count
    }
    return final
  }

const a = count("abccbbbasssde")
console.log(a);