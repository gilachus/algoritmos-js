const multiply = (a,b) => {
    let resultado = 0
    const positivo = Math.abs(b) == b
    for (i=0;i < Math.abs(b);i++) {
        resultado = positivo ? resultado + a : resultado - a
    }
    return resultado
}
const producto = multiply(50,-2)
console.log("producto",producto)

const getBiggest = (arr) => arr.reduce((acc,el) => acc > el ? acc : el)
const mayor = getBiggest([60, 1000, 0,-1, 55])
console.log("mayor",mayor)

const clean = (arr) => arr.reduce((acc,el) => {
    if (el) {
        acc.push(el)
    }
    return acc
}, [])
const limpio = clean([1, undefined, null, 0, 2])
console.log("limpio",limpio)

const arr = [[5,16], [[4, 30]], [90, []]]
const flatten = arr => arr.reduce((acc, el) => acc.concat(el), [])
const plano = flatten(arr)
console.log("plano",plano)

const repeated = str => {
    const lowered = str.toLowerCase()
    const splitted = lowered.split(' ')
    const reduced = splitted.reduce((acc,el) => {
        if (acc[el]) {
            acc[el]++
        } else {
            acc[el] = 1
        }
        return acc
    }, {})
    return Object.entries(reduced).reduce((acc,el) => acc[1] > el[1] ? acc : el)
}
const repetido = repeated("this is a repeated word test this is a a")
console.log("repetidx",repetido)

const isPalindrome = (str) => {
    str = str.replace(/\s/g, "")
    const lowered = str.toLowerCase()
    const splitted = lowered.split("")
    const reversed = splitted.reverse()
    const joined = reversed.join("")
    return lowered == joined
}
const isPal = isPalindrome("Yo hago yoga hoy")
console.log("palindromo",isPal)