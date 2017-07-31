/*
Write a function isValidEmail(email) that takes an email string.
Return true if the email is considered valid. A valid email:

- Contains one and only one "@" symbol
- All the characters before the "@" symbol are alphanumeric, underscores,
  or dots "."
- There is one and only one dot "." after the "@" symbol
- Besides the dot ".", all the characters after the "@" are in the alphabet
  (no numbers or underscores)
*/
console.log("isValidEmail\n-----------")
function isValidEmail(email) {
	return  /^([\w_\.]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/.test(email);
}
/*
 return /^[a-z0-9_\.]+@[a-z0-9]+\.[a-z0-9]+$/i.test(email);
 would be worng because he question says: "Besides the dot ".", all the
 characters after the "@" are in the alphabet (no numbers or underscores)".
 Thus, after '@'symbol, there should not be any numbers in there.
*/
console.log(isValidEmail("junk@gmail.com")); //true
console.log(isValidEmail("now.what@now.co")); //true
console.log(isValidEmail("i_am_happy@feelings.net")); //true
console.log(isValidEmail("my@website@gmail.com")); //false
console.log(isValidEmail("webby@gmail.co.net")); //false
console.log(isValidEmail("anthony@ira_ladson.com")); //false
console.log(isValidEmail("anthony!@ladson.com")); //false
console.log("\n");


/*
Write a function peakFinder(array) that takes in an array of numbers.
It should return an array containing the indices of all the peaks.
A peak is an element that is greater than both of its neighbors.
If it is the first or last element, it is a peak if it is greater than
its one neighbor. Assume the array has a length of at least 2.
*/
