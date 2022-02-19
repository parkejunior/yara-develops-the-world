class Pen {
  totalInk = 0

  constructor(ink) {
    this.totalInk = ink
  }
  
  write() {
    console.log(this.totalInk)
  }
}

const canetona = new Pen(90)
const canetinha = new Pen(50)

canetinha.write()
canetinha.write()
canetona.write()
canetinha.write()
canetinha.write()
canetona.write()