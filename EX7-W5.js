function meleeRangedGrouping (str) {
    //your code here
    var groupingHero = str.split(',')
    var role = []
    var result = []
    var melee = []
    var ranged = []
    if (str === ''){
      return result
    }else{
      for (var i = 0; i < groupingHero.length; i++) {
        role.push(groupingHero[i].split('-'))
      // console.log(role)
      // console.log(role[i][1])
      if (role[i][1] === 'Ranged'){
        ranged.push(role[i][0])
      }else if(role[i][1] === 'Melee'){
        melee.push(role[i][0])
      }
    }
    }
  
      result.push(ranged, melee)
    // console.log(groupingHero)
      return result
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []