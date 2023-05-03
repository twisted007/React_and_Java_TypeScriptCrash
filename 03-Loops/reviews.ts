let reviews: number[] = [5,5,4.5,1,3];

for (let i=0;i<reviews.length;i++){
    console.log(reviews[i]);
    console.log(`The sum of ${reviews[i-1]} and ${reviews[i]} is: ${reviews[i]+reviews[i-1]}`)
    // Turns out we can do arithmetic(and probably concat) within the template string operator
}

let total: number = 0;
for (let i=0;i<reviews.length;i++){
    total += reviews[i];
}
let average: number= 0;
average = total/reviews.length
console.log(`The average is ${average}`)