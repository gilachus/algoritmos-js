const brujula = (arr) => {
    object = arr.reduce((acc,el) => {
        acc[`${el}`]++
        return acc
    }, {north:0, south:0, west:0, east:0})
    console.log(object)
    
    return object
}
const limpiar = (object) => {
    diff1 = object.north - object.south
    diff2 = object.west - object.east
    arr1 = Array(Math.abs(diff1)).fill(diff1 > 0 ? 'north' : 'south')
    arr2 = Array(Math.abs(diff2)).fill(diff2 > 0 ? 'west' : 'east')
    return arr1.concat(arr2)
}
const reducido = limpiar(brujula(['north', 'south', 'west', 'east', 'west', 'north']))
console.log("reducido:", reducido)

const pascalize = (str) => {
    arr = str.match(/[a-zA-Z0-9]+/g)
    pasc = arr.map((el, index) => capitalize(el)) //index > 0 ? capitalize(el) : el.toLowerCase()
    return pasc.join("")
}
function capitalize(word) {
    return word.toLowerCase().replace(/\w/, firstLetter => firstLetter.toUpperCase());
}
const pascal = pascalize("eL dOn-quijotE de 1a Mancha")
console.log("pascalize:", pascal)