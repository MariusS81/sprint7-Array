let numbers = [1, -5, 20, -34, 16, 29, 36, -4];

function reversNumber(array) {
 let newList = [];
 for (let i = array.length - 1; i >= 0; i--) {
 newList.push(array[i]);
 }
 return newList;
}

console.log(reversNumber(numbers));