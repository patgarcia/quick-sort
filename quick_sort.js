function quickSort(arr){
  // Rescursively split the input array into three parts
  // leftSide, pivot, rightSide. Each side contains elements
  // that are lower or higher than pivot respectively.
  if(arr.length <= 1) return arr
  const pivot = arr.pop();
  const leftSide = [];
  const rightSide = [];
  for(let i of arr) i <= pivot ? leftSide.push(i) : rightSide.push(i)
  return quickSort(leftSide).concat([pivot]).concat(quickSort(rightSide))
}


let unsortedArray = [
   6,  0,  2, 31, 39, 23,  8, 33, 24, 24,
  34, 24, 24,  2, 31, 24, 28, 28, 38, 23,
  39, 23,  9, 13,  2,  6,  6,  3,  8, 30,
  24,  4,  8,  3, 30,  2,  7,  9, 38,  1
];

quickSort(unsortedArray); 
/* 
[
   0,  1,  2,  2,  2,  2,  3,  3,  4,  6,
   6,  6,  7,  8,  8,  8,  9,  9, 13, 23,
  23, 23, 24, 24, 24, 24, 24, 24, 28, 28,
  30, 30, 31, 31, 33, 34, 38, 38, 39, 39
]
