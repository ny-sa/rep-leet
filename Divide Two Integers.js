//Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.             

//Return the quotient after dividing dividend by divisor.

//The integer division should truncate toward zero.

//My solution
var divide = function(dividend, divisor) {
    let count = 0, neg1 = false, neg2 = false;
    if (dividend < 0) { 
        dividend = -dividend;
        neg1 = true;
    }
    if (divisor < 0) {
        divisor = -divisor;
        neg2 = true;
    }
    if (divisor == 1) 
        count = dividend;
    else 
        while (dividend >= divisor) {
            count++;
            dividend -= divisor;
        }
    if (dividend == 2147483648 && divisor == 1 && neg1 && neg2) count--; //brute forcer
    if (neg1) count = -count;
    if (neg2) count = -count;
    return count;
}