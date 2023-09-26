//Make Album
function make_album(artist:string, title:string, tracks?:number) {
    let album = {
        artist: artist,
        title: title,
        tracks: tracks

    }
    
    return album
}
//Create three different album objects
let album1= make_album('Billie Eilish', 'Happier than ever')
let album2= make_album('Lana Del Rey', 'Born to die', 12)
let album3= make_album('Justin Beiber', 'Justice')

console.log(album1)
console.log(album2)
console.log(album3)