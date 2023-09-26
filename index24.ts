let userNames: string[]= ['admin','Michael', 'Jim','Pam','Toby']
for(let i of userNames)
    if(i==='admin') {
        console.log(`hello ${i} would you like to see a status report?`);
    }
else {
console.log(`hello ${i}, thankyou for logging in again`);
}
//EX 31 For empty usernames array
userNames= []
 if(userNames.length==0) {
        console.log ('we need to find some users');
    }
