//EX 18 SEEING THE WORLD

let places: string[]= ['Hunza', 'Neelum valley','Swat', 'Chitral', 'Naran'];
//Printing in original order
console.log(places);
// Printing in alphabetical order
console.log([...places].sort());
//Array still in original order
console.log(`Array is still in original order`);
console.log(places);
//Printing in reverse alphabetical order
console.log([...places].sort().reverse());
//Array still in original order
console.log(places);
//Reverse order of list
console.log([...places].reverse());
//Reverse order back to original order
console.log(places);
export{};