let cooker = {
    color: "grafitte",
    hobs: 6,
    oven: true,
    cleanliness: "dirty",
    dateOfPurchase: 2010,
    
    cook() {
        console.log("Baking a cake in my cooker that I bought in " + this.dateOfPurchase);
    },

    clean() {
        console.log("Cleaning my " + this.cleanliness + "cooker, so it can be " + this.color + "again.");
    }
}