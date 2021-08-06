function repeatStringNumTimes(str, num) {
  let repeated = "";

  while(num > 0){
    repeated += str;
    num--;
  }
  return repeated;
}

console.log(repeatStringNumTimes("abc", 3));