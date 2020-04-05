class BiteFish extends Fish{
  constructor(options){
    super(options);
    this.imageUri = '/images/bite-fish.gif';
    this.isTasty = false;
    this.tank = options.tank;
  }

  checkProximity(){
    let proximate_fishes = this.tank.getProximateDenizens(this.position, 30).filter(denizen=> denizen.isTasty === true && denizen.id !== this.id)
    if(proximate_fishes.length > 0){
      proximate_fishes = proximate_fishes.map(fish => fish.kill());
    }
    return proximate_fishes;
  }

  update(t){
    super.update(t);
    this.checkProximity();
  }
}

