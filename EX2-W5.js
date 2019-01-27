function changeVocals (str) {
  var alfabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var vocal = 'aiueoAIUEO'
  var nextWord = ''
  var cekVocal = ''

  for (var i = 0; i < str.length; i++) {
    // init flag 
    var check = true
    // check kalau 1 huruf vocal apa bukan 
    for (var j = 0; j < vocal.length; j++) {
        // console.log(vocal[j])
        // console.log(cekVocal)
         if (str[i] === vocal[j]){
            //nextWord += alfabet[k + 1]
            for (var k = 0; k < alfabet.length; k++) {
              if (str[i] === alfabet[k]){
                nextWord += alfabet[k + 1]
                // set flag  
              } else {
                check = false
              }
            } 
          }
    } if (check === true)
    // kondisi kalau dia sudah vokal , jangan ditambah lagi 
        nextWord += str[i]


  }
  return nextWord
}

// //test case
// console.log(changeVocals('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
// console.log(changeVocals('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
// console.log(changeVocals('Alexei')); // 'JFXFLb'
// console.log(changeVocals('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

function reverseWord (str) {
  var vocalChange = changeVocals (str)
    var reversed = ''
    for (var l = vocalChange.length -1; l >= 0; l--) {
      reversed += vocalChange[l]
      // console.log(changeVocal[l])
    }
    return reversed
  // return reversed
}
// //test case
// console.log(reverseWord('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
// console.log(reverseWord('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
// console.log(reverseWord('Alexei')); // 'JFXFLb'
// console.log(reverseWord('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

function setLowerUpperCase (str) {
  var lowerAndUpper = reverseWord (str)
  // var upper = lowerAndUpper.toUpperCase()
  var changeSize = ''
  for (var m = 0; m < lowerAndUpper.length; m++) {
    if (lowerAndUpper[m] !== lowerAndUpper[m].toLowerCase()) {
      changeSize += lowerAndUpper[m].toLowerCase()
    }else{
      changeSize += lowerAndUpper[m].toUpperCase()
    }
  }
  return changeSize
}
// //test case
// console.log(setLowerUpperCase('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
// console.log(setLowerUpperCase('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
// console.log(setLowerUpperCase('Alexei')); // 'JFXFLb'
// console.log(setLowerUpperCase('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

function removeSpaces (str) {
  var spaceGone = setLowerUpperCase (str)
  var spaceRemove = ''
  for (var n = 0; n < spaceGone.length; n ++) {
    if (spaceGone[n] !== ' '){
      spaceRemove += spaceGone[n]
    }
  }
  return spaceRemove
}

// //test case
// console.log(removeSpaces('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
// console.log(removeSpaces('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
// console.log(removeSpaces('Alexei')); // 'JFXFLb'
// console.log(removeSpaces('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

function passwordGenerator (name) {
  var result = removeSpaces (name)
    if (name.length < 5){
     return 'minimal karakter yang diinputkan adalah 5 karakter'
    }
  
    return result
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'