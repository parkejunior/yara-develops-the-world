let needle ={
    tapestry:false,
    sewing:true,
    size:80,
    brand:"Renne",
    hasThread: true,

    sew(){
        console.log("Sewing my skirt with my needle size " +this.size )
    },

    insertingThread(){
        console.log("Inserting thread into my " +this.brand + "needle.")
    }
}