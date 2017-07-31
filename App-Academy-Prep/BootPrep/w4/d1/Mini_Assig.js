/******************************************************************************
Write a function divisibleByNPairSum(array, n) that takes an array of numbers.
It should return an array of all the pairs of indices whose sum is a multiple of n.

!! Use Array.prototype.forEach

> divisibleByNPairSum([1, 6, 3, 4, 2, 0], 3);
[ [ 0, 4 ], [ 1, 2 ], [ 1, 5 ], [ 2, 5 ], [ 3, 4 ] ]

> divisibleByNPairSum([8, 3, 5, 9, 2], 10);
[ [ 0, 4 ] ]

******************************************************************************/
let divisibleByNPairSum = (array, n) => {
  let pairs = []
  array.forEach((ele1, i) => {
    array.forEach((ele2, j) =>{
      if ((j > i) && (array[i] + array[j]) % n === 0) {
        pairs.push([i, j])
      }
    })
  })
  console.log(pairs);
  return pairs
}

divisibleByNPairSum([1, 6, 3, 4, 2, 0], 3);
// [ [ 0, 4 ], [ 1, 2 ], [ 1, 5 ], [ 2, 5 ], [ 3, 4 ] ]
divisibleByNPairSum([8, 3, 5, 9, 2], 10);
// [ [ 0, 4 ] ]
/*******************************************************************************
# Greatest Common Factor
# ------------------------------------------------------------------------------
# Return the greatest number which is a factor of both inputs.
#
# The greatest common factor of 6 and 10 is 2
# the greatest common factor of 10 and 15 is 5

Examples
greatestCommonFactor(6, 10) => 2
greatestCommonFactor(10, 15) => 5
greatestCommonFactor(4, 7) => 1
greatestCommonFactor(4, 8) => 4
*******************************************************************************/
let greatestCommonFactor = (x, y) => {
for (var i = x; i > 0; i--) {
  if ((x % i === 0) && (y % i === 0)) {
    return i
    }
  }
}


console.log(greatestCommonFactor(6, 10)) // => 2
console.log(greatestCommonFactor(10, 15)) // => 5
console.log(greatestCommonFactor(4, 7)) // => 1
console.log(greatestCommonFactor(4, 8)) // => 4
/*******************************************************************************
Two Degrees of Separation
------------------------------------------------------------------------------
You have a hash that represents all of Facebook.  Each key is the
name of a person on facebook, and each value is an array of all their friends.
Assume everyone on Facebook has a different name.

Given Facebook and the name of a person, return an array of all the friends
of their friends. Do not include the original person or their immediate friends.

Example 1
var facebook_1 = {
  "Harry Potter" : ["Ron Weasley"],
  "Ron Weasley" : ["Harry Potter", "Fred Weasley"],
  "Fred Weasley" : ["Ron Weasley"]
}

twoDegreesAway(facebook_1, "Harry Potter"); //=> ["Fred Weasley"]);

Example 2
facebook_2 = {
  "Mark Zuckerberg" : ["Eduardo Saverin", "Dustin Moskovitz", "Sean Parker"],
  "Eduardo Saverin" : ["Mark Zuckerberg", "Tyler Winklevoss", "Cameron Winklevoss", "Dustin Moskovitz"],
  "Tyler Winklevoss" : ["Eduardo Saverin"],
  "Cameron Winklevoss" : ["Eduardo Saverin"],
  "Dustin Moskovitz" : ["Mark Zuckerberg", "Eduardo Saverin"],
  "Sean Parker" : ["Mark Zuckerberg"]
}

twoDegreesAway(facebook_2, "Mark Zuckerberg"); //=> ["Tyler Winklevoss", "Cameron Winklevoss"]);
*******************************************************************************/
let twoDegreesAway = (fb, name) => {
  let array = []
  fb[name].forEach(friend => {
    fb[friend].forEach(fof => {
      if ((fof != name) && (!fb[name].includes(fof))) {
        array.push(fof)
      }
    })
  })
  console.log(array);
  return array
}

function twoDegreesAway(fv, nm){
	// 1. We don't want mark or his friends in the final answer, but we do want all THEIR friends. So we need a list of M & friends
	var remove = fv[nm].concat(nm);
	// 2. Take the list of M & Friends, and turn it into a huge list of ALL of THEIR friends
	var all = remove.reduce((a, c) => a.concat(fv[c]), []);
	//Feedback: This is a trick for getting uniques. A function called unique would work here
	all = Array.from(new Set(all)); // uniques only

	//Feedback: Return only the people who are not included in remove, which is Mark and his Friends
	return all.filter(p => !remove.includes(p));
}

var facebook_1 = {
  "Harry Potter" : ["Ron Weasley"],
  "Ron Weasley" : ["Harry Potter", "Fred Weasley"],
  "Fred Weasley" : ["Ron Weasley"]
}

twoDegreesAway(facebook_1, "Harry Potter"); //=> ["Fred Weasley"]);

facebook_2 = {
  "Mark Zuckerberg" : ["Eduardo Saverin", "Dustin Moskovitz", "Sean Parker"],
  "Eduardo Saverin" : ["Mark Zuckerberg", "Tyler Winklevoss", "Cameron Winklevoss", "Dustin Moskovitz"],
  "Tyler Winklevoss" : ["Eduardo Saverin"],
  "Cameron Winklevoss" : ["Eduardo Saverin"],
  "Dustin Moskovitz" : ["Mark Zuckerberg", "Eduardo Saverin"],
  "Sean Parker" : ["Mark Zuckerberg"]
}

twoDegreesAway(facebook_2, "Mark Zuckerberg"); //=> ["Tyler Winklevoss", "Cameron Winklevoss"]);
