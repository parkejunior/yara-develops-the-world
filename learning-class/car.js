class Car {
  speed = 0
  maxSpeed = 0
  gear = 'N'
  
  constructor(brand, maximumSpeed) {
    this.maxSpeed = maximumSpeed
    
    console.log(`Welcome to your new ${brand} and its maximum speed is ${maximumSpeed} km/h`)
  }

  switchGear(gearPosition) {
    /*const gears = ['F', 'N', 'R']
    
    console.log(gears.find(gearPosition))

    //if (gears.search(gearPosition)) {

    //}*/
    
    switch (gearPosition) {
      case 'F':
        this.gear = gearPosition
        console.log('Gear Position in Forward gear');
        break;
      case 'N':
        this.gear = gearPosition
        console.log('Gear Position in Neutral gear');
        break;
      case 'R':
        this.gear = gearPosition
        console.log('Gear Position in Reverse gear');
        break;
      default:
        throw Error('Gear Position value is invalid')
    }
  }
  
  speedUp(accelerationPercentage) {
    this.speed = this.maxSpeed / 100 * accelerationPercentage
    
    console.log(`Speeding up to ${this.speed} km/h`)
  }

  speedDown(slowdownPercentage) {
    if (slowdownPercentage < 0 || slowdownPercentage > 100) {
      throw Error("Slowdown percentage value cannot be between 0 and 100 percentage")
    }

    this.speed = (this.speed / 100) * (100 - slowdownPercentage)
    
    console.log(`Speeding down to ${this.speed} km/h`)
  }
}

const toyota = new Car('toyota', 250)
const ford = new Car('ford', 280)

toyota.speedUp(40)
toyota.speedDown(20)
toyota.speedDown(20)
toyota.speedDown(80)
toyota.speedDown(100)

toyota.switchGear('F')
toyota.switchGear('N')
toyota.switchGear('R')