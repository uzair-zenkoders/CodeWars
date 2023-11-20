// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    let sp = typeof(iterable)===String?iterable.split(''):iterable
    let unique = []
    for(let i=0;i<sp.length;i++){
        if(sp[i]!=sp[i+1]){
            unique.push(sp[i])
        }
    }return unique
  }

//   a= uniqueInOrder('AAAABBBCCDAABBB')
  a= uniqueInOrder([1,2,3,4,4,4,5,56,6,6]) 
  console.log(a)