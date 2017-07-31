function clock_angles(hour, minute) {
  // first workout the minute angle
    var minAngle = 360*(minute/60);
  // then work out hour angle
  // first the hour then the hour + mins
    var hourAngle = (360*(hour/12))+((360/12)*(minute/60));
    console.log("minute angle = " + minAngle);
    console.log("hour angle = " + hourAngle);
  //if minute angle greater than hour angle
    if(minAngle > hourAngle) {
        return minAngle - hourAngle;
    }
  //if minute angle less than minute angle
    else {
        return hourAngle - minAngle;
    }
}

console.log(clock_angles(6,30));
