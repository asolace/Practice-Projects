//Program needs fixing

var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 6);
var totalDamage = 0

while(slaying){
    if (youHit === 1){
        console.log("Hit! Damage Done: " + youHit);
        var totalDamage = totalDamage + damageThisRound;
        console.log(totalDamage);
        if(totalDamage >= 4){
            console.log("Dragon is Slayed");
            slaying = false;
        }
        else {
            youHit = Math.floor(Math.random() * 2);
            slaying = true;
        }
    }
    else {
        console.log("Miss!");
    }
    slaying = false;
};
