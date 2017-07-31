function leastCommonMultiple(num1, num2){
  for (var i = num1; true; i += num1) {
    if (i % num2 === 0){
      return i;
    }
  }
}


** leastCommonMultiple(2, 3) => 6
** leastCommonMultiple(6, 10) => 30
** leastCommonMultiple(24, 26) => 312
*/
