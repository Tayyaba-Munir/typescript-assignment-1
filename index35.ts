//AANDWICHES
function make_sandwich(...items:string[]) {
    console.log('Sandwich Summary:')
    if(items.length==0){
        console.log('You ordered an empty sandwich')
    }
    else{
        items.forEach((item, i)=> {
            console.log(`${i+1}.${item}`)
        })
    }
    console.log('/n')
}
//Call the function with different number of arguments
make_sandwich('Turkey', 'lettuce', 'tomato', 'mayonnaise')
make_sandwich('ham', 'cheese')
make_sandwich('peanut butter', 'jelly', 'banana', 'honey')