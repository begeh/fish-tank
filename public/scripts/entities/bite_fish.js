class BiteFish extends Fish{
  constructor(options){
    super(options);
    this.imageUri = '/images/bite-fish.gif';
    this.isTasty = false;
    this.tank = options.tank;
  }

  checkProximity(){
    let proximate_fishes = this.tank.getProximateDenizens(this.position, 70).filter(denizen=> denizen.isTasty === true && denizen.id !== this.id).map(fish => fish.kill());
    console.log(proximate_fishes);
  }

  onClick(){
    this.checkProximity();
  }
}

