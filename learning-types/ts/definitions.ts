/* TYPES */

// string
// int
// float
// bool
// array
// object
// function

function setString(value: string) {
    console.log(`You set a string: ${value}`)
}

function setInteger(value: number) {
    console.log(`You set a integer: ${value}`)
}

function setFloat(value: number) {
    console.log(`You set a float: ${value}`)
}

function setBoolean(value: boolean) {
    console.log(`You set a boolean: ${value}`)
}

function setArray(value: string[]) {
    console.log(`You set a array: ${value}`)
}

function setObject(value: object) {
    console.log(`You set a object: ${value}`)
}

function setFunction(value: Function) {
    console.log(`You set a function: ${value}`)
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