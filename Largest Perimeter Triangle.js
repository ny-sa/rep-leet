//Given an array A of positive lengths, return the largest perimeter of a triangle with non-zero area, formed from 3 of these
//lengths.

//If it is impossible to form any triangle of non-zero area, return 0.

//My solution
var largestPerimeter = function(A) {
    peri = A.sort((a, b) => b - a);
    while(peri[0] >= peri[1] + peri[2]) peri.shift();   //ensure 3 longest sides can make a triangle
    return peri.length < 3 ? 0 : peri[0] + peri[1] + peri[2];
};