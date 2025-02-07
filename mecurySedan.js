//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass").Vehicle

//this shows how to call from this module...
//let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
//console.log(v.make)

class Car extends VehicleModule {
  constructor (make, model, year, color, mileage){
    super(make, model, year, color, mileage);
    this.maxPassengers = 5;
    this.passengers = 0;
    this.numberOfWheels = 4;
    this.maxSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
  }
  start(){
    if(this.fuel > 0){
    return this.started = true
  } else {
    return this.started = false;
  }

  }
  checkService(mileage){
    if (this.mileage > 30000){
      this.scheduleService = true
      return this.scheduleService;
    }
  }
    loadPassenger(num) {
      if (this.passenger < this.maxPassengers) {
          if ((num + this.passenger) <= this.maxPassengers) {
              this.passenger = num;
              return this.passenger;               
          } else {
              console.log(this.model + " " + this.make + " not have enough space to take all passengers.");

          }
      } else {
          console.log(this.model + " " + this.make + " is full");
      }
    }

  }








