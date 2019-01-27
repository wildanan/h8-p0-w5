function sorting(arrNumber) {
    var sortArr = arrNumber
    for (var i = 0; i < arrNumber.length; i++) {
      for (var k = i; k < arrNumber.length; k++) {
        if (arrNumber[k] > arrNumber [i]){
          var temp = arrNumber[i]
          arrNumber[i] = arrNumber[k]
          arrNumber[k] = temp
        }
      }
    }
    return sortArr
  }
  
  function getTotal(arrNumber) {
    var sort = sorting(arrNumber)
    var theBigest = sort[0]
    var frekuensi = 0
    // console.log('===>', theBigest)
    if (sort.length === 0){
      return ''
    }else{
      for (var j = 0; j < arrNumber.length; j++) {
      if( theBigest === arrNumber[j]){
        // console.log(j)
        frekuensi++
      }
      }
    }
    return 'angka paling besar adalah ' +theBigest+ ' dan jumlah kemunculan sebanyak ' + frekuensi + ' kali'
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    //console.log( "listSorting ===>",listSort )
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  // ''