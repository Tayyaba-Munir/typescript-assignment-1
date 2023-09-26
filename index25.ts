//CHECKING USERNAMES
let current_users:string[]= ['Michael', 'jim', 'Pam', 'Toby' ,'Dwight']
let new_users: string[]= ['JIM', 'Pam','Andy', 'Erin', 'Angela']
for(let name of new_users) {
    let lowercaseName1= name.toLocaleLowerCase();
    for(let i of current_users) {
        let lowercaseName2= i.toLocaleLowerCase
    }
    if(current_users.includes(lowercaseName1)) {
        console.log(`${name} will need to enter a new username`)
    }
    else{
        console.log(`username ${name} is available`)
    }
}
