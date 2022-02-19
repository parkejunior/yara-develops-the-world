/* TYPES */

// string
// number (int / float)
// boolean
// object (array / object)
// function

function setString(value) {
    console.log(`You set a string: ${typeof value}`)
}

function setInteger(value) {
    console.log(`You set a integer: ${typeof value}`)
}

function setFloat(value) {
    console.log(`You set a float: ${typeof value}`)
}

function setBoolean(value) {
    console.log(`You set a boolean: ${typeof value}`)
}

function setArray(value) {
    console.log(`You set a array: ${typeof value}`)
}

function setObject(value) {
    console.log(`You set a object: ${typeof value}`)
}

function setFunction(value) {
    console.log(`You set a function: ${typeof value}`)
}

export default {
    setString,
    setInteger,
    setFloat,
    setBoolean,
    setArray,
    setObject,
    setFunction
}