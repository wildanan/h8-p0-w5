// EX 16/ EX4 - W5

function totalDigitRekursif(angka) {
  var sum = 0
  var numStr = String(angka)
  // number diubah ke string untuk medapatkan index
  
  if(numStr.length === 0) {
    //ketika strlength !== 0, maka akan dikembalikan kebawah
    return 0
    //ketika strleg sudah 0, maka dia akan menjadi 5 + 1 + 2 + 0, dan dia akan kelua dari loop
  }else{
    var strToNum = Number(numStr[0])//setelah medapat index akan diuban jadi string agar bisa bertambah
    return strToNum + totalDigitRekursif(numStr.slice(1))
    // akan menjadi 5 + 1 (lalu kembali keatas)
  }
}


// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5