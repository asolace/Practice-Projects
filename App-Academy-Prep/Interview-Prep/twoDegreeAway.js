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
	var remove = fv[nm].concat(nm);
	var all = remove.reduce((a, c) => a.concat(fv[c]), []);
	all = Array.from(new Set(all));
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
