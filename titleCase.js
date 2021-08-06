function titleCase(str) {
  let arr = str.toLowerCase().split(' ');
  let result = arr.map(function(words){
    return words.replace(words.charAt(0), words.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

console.log(titleCase("I'm a little tea pot"));