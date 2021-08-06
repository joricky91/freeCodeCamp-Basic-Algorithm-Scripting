function frankenSplice(arr1, arr2, n) {
  let array_split = arr2.slice();
  for (let i = 0; i < arr1.length; i++){
    array_split.splice(n, 0, arr1[i]);
    n++;
  }

  return array_split;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));