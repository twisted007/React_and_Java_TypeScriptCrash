let sportsOne: string[] = ['Golf',"socker","footbal","badminton", "frisbee"];

for (let i=0;i<sportsOne.length;i++){
    console.log(sportsOne[i]);
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~`");
for (let blah of sportsOne){
    if (blah == "socker"){
        console.log(blah + "<< My favorite")
    }
    else {
        console.log(blah)
    }
}