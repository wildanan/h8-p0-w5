function kaliTerusRekursif(angka) {
  var sum = 1
  var numStr = String(angka)
  
  for (var i = 0; i < numStr.length; i++) {
    sum *= numStr[i]
    // console.log(sum)
  }
    if(numStr < 10) {
      return angka
    }else {
      return kaliTerusRekursif(sum)
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6