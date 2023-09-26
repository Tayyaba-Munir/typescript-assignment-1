let magicians:string[]= ['David', 'Wallace', 'John']
let show_magicians= (magicians:string[])=> {
    magicians.map((magician:string)=> {
        console.log(magician)
    })
}
show_magicians(magicians);

//Great Magicians Q 42
function make_great(magicians:string[]):string[] {
    let greatMagicians: string[]= magicians.map(magician=> `the Great ${magician}`)
    return(greatMagicians)

    }
let greatMagiciansNames:string[]= make_great(magicians)
console.log(magicians)
console.log(greatMagiciansNames)
