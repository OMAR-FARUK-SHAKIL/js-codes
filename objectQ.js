let user = {
    name: 'shakil'
}

//  Object.freeze(user); // that actually frezze the obj so we can not change anything.

Object.seal(user); // it allow you to update only but not add or delete any property.

user.name = "Omar";
user.age = 24;

console.log(user); // when freeze => { name: 'shakil' }
//when seal => { name: 'Omar' }



let profile = {
    name: 'shakil'
}

Object.defineProperty(profile, "age",
    {
        value : 3,
        writable : false
    });


profile.name = "Omar";
profile.age = 24; // the update of age is limited.

console.log(profile);