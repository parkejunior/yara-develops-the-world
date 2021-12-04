let wardrobe = {
   material: "wood",
   fullCapacity:"90%",
   mold:true,
   doors:2,
   mirros:1,

   storage(){
          console.log("Storaging my clothes is almost in " +this.fullCapacity)
   },

   mold(){
       console.log("Storagying clothes o my wardrobe made of "+this.material + "make them mold.")

   }
}