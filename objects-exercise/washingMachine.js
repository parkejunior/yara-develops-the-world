let washingMachine = {
    status:"empty",
    drier:true,
    washing:true,
    programs:9,
    consumption:"low",

    wash(){
        console.log("Washing clothes with my new washing machine has a "+this.consumption + "consumption.")
    },

    dry(){
        console.log("Drying my clothes is doesn't cost much since this drier has a " + this.consumption + "consuption.")
    }
}