//You are given a string representing an attendance record for a student. The record only contains the following three characters:
//'A' : Absent.
//'L' : Late.
//'P' : Present.
//A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 
//'L' (late).
//
//You need to return whether the student could be rewarded according to his attendance record.

//My solution
var checkRecord = function(s) {
    return  !s.includes('LLL') &&
            !s.substring(0, s.indexOf('A'))
              .concat(s.substring(s.indexOf('A') + 1, s.length))
              .includes('A');
};