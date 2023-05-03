var reviews = [5, 5, 4.5, 1, 3];
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    console.log("The sum of ".concat(reviews[i - 1], " and ").concat(reviews[i], " is: ").concat(reviews[i] + reviews[i - 1]));
    // Turns out we can do arithmetic(and probably concat) within the template string operator
}
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    total += reviews[i];
}
var average = 0;
average = total / reviews.length;
console.log("The average is ".concat(average));
