let guestsArray: string[]= ['Jim', 'Pam', 'Dwight']
for(let i=0; i<guestsArray.length;i++) {
    console.log(guestsArray[i], 'would you like to have dinner with me tonite?');
}

//guest who cant make it;
let guest: string= 'Dwight'
console.log(`${guest} cant make it to dinner tonite`);

//Replace the guest
guestsArray.pop()
console.log(guestsArray);
guestsArray.push('Michael')
console.log(guestsArray);

//print a 2nd set of invitation messages
console.log('second set of invitation messages');
guestsArray.forEach((i) => {
    console.log(`Dear ${i}, you are invited to dinner`);
});
//EX 16 MORE GUESTS
guestsArray.forEach((i)=> {
    console.log(`Hey, ${i}, i found a bigger dinner table`);
})
guestsArray.unshift('Andy')
guestsArray.splice(3,0,'Toby')
guestsArray.push('Oscar')
console.log(guestsArray);
//guestsArray.forEach((i)=> {
   // console.log(`Hello ${i}, you are invited at dinner tonite`);
//})
//EX 17; Shrinking guest list
for(let i=2; i<guestsArray.length;i++) {
    console.log(`Hey, ${guestsArray[i]} I'm afraid that my dinner table won't arrive in time and i can invite only 2 people for dinner`);
}
console.log(`I'm sorry ${guestsArray[5]} i can't invite you to dinner`);
guestsArray.pop()

console.log(`i'm sorry ${guestsArray[4]} i can't invite you to dinner`);
guestsArray.pop()

console.log(`i'm sorry ${guestsArray[3]} i can't invite you to dinner`);
guestsArray.pop()

console.log(`i'm sorry ${guestsArray[2]} i cant invite you to dinner tonite`);
guestsArray.pop()

//onsole.log(guestsArray);
guestsArray.forEach((i)=> {
    console.log(`${i} , you are still invited to the dinner`)
})

guestsArray.pop()
guestsArray.pop()
console.log(guestsArray);
export{guestsArray};