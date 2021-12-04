let phone = {
    color: "black",
    off: false,
    type: "mobile",
    baterry: "60%",
    payment: "bill",

    call(){
        console.log("Calling somone with my " +this.type + "phone.")
    },

    gaming(){
        console.log(`Gaming using my ${this.color}${this.type}phone.` )
    }

}
