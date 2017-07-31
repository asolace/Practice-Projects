var friends = {
    bill: {
        firstName: 'Bill',
        lastName: 'Gates',
        number: '(206) 555-5555',
        address: ['One Microsoft Way','Redmond','WA','98052']
    },
    steve: {
        firstName: 'Steve',
        lastName: 'Jobs',
        number: '(206) 444-4444',
        address: ['1 Infinite Loop Road', 'Cupertino', 'CA', '94102']
    }
};
var list = function(friends){
    for (var x in friends){
        console.log(x);
    }
};

var search = function(name){
    for (var x in friends){
        if(friends[x].firstName === name){
            console.log(friends[x]);
            return friends[x];
        }
    }
};

list()
search()
