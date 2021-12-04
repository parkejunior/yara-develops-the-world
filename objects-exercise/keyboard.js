let keyboard = {
    color: "white",
    language: "english",
    capitalLetters: "true",
    lowerCaseLetters: "true",
    specialCharacters: "true",

    type(){
        console.log("I prefer to type on my " + this.color + "keyboard")
    },

    delete(){
        console.log(`When I write in another language that is not ${keyboard.language}I need to delete it.` )
    }
}