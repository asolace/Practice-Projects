//isValidEmail look for in w2/d2
function isValidEmail(email) {
	return  /^([\w_\.]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/.test(email);
}
/*
  ^ = begining of string
  / / = are like quotes " "
  \w = a-zA-Z0-9
  + = 1 or more of the string
  @ = follow by the @ sign
  $ = end of string
*/
