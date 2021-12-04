let babyTrolley ={
    color: "blue",
    babyin: true,
    numberOfWheels: 4,
    cover:true,
    babeAge: 1,

    push(){
        console.log("Pushig my " +this.color + "baby trolley.")
    },

    openingCover(){
        console.log("Opening the cover of my baby trolley that has "+this.numberOfWheels + "wheels.")
    }
}