import core from './definitions'

const outraFuncao = () => {
    console.log("i'm a function")
}

core.setString('melon')

core.setInteger(20)

core.setFloat(52.44)

core.setBoolean(true)

core.setObject({ text: "i'm a text" })

core.setArray(['bea', 'ana', 'luis'])

core.setFunction(outraFuncao)