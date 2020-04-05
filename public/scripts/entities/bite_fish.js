class BiteFish extends Fish{
  constructor(options){
    super(options);
    this.imageUri = '/images/bite-fish.gif';
    this.tank = options.tank;
  }

  checkProximity(){
    let proximate_fishes = this.tank.getProximateDenizens(this.position, 5000).filter(denizen=> denizen.isTasty === true).map(fish => fish.id);
    console.log(proximate_fishes);
  }

  onClick(){
    this.checkProximity();
  }
}

