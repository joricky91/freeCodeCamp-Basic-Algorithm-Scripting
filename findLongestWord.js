function findLongestWordLength(str) {
  let count = 0;
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++){
    if (words[i].length > count){
      count = words[i].length;
    }
  }
  return count;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));