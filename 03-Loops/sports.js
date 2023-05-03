var sportsOne = ['Golf', "socker", "footbal", "badminton", "frisbee"];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~`");
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var blah = sportsOne_1[_i];
    if (blah == "socker") {
        console.log(blah + "<< My favorite");
    }
    else {
        console.log(blah);
    }
}
