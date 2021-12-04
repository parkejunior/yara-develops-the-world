let boat = {
    color: red,
    size: 62,
    type:"widebeam",
    homeConverted:true,
    speed:3000,


    sink(){
        console.log("The" +this.color + "boat is sinking.")
    },

    /*dock = park */
    dock(){
        console.log("Dockig the " +this.type + "boat is hard, since they are big.")
    }
}