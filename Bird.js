class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
  
    this.trajectory = []
  }


  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if (this.body.velocity.x>10 && this.body.position.x>200){
      //STore the bird's x and y position inside the this.trajectory array
      var position = [this.body.position.x,this.body.position.y];
      this.trajectory.push(position);
    }

    //Loop through  this.trajectory array and display the smoke image for each position inside the array
    for (var i=0; i<this.trajectory.length; i++){
      //Display the smoke image using the image command
      image(this.smokeImage, this.trajectory[i][0],this.trajectory[i][1]);
    }

  }
}


//this.trajectory = [[10,20], [20,30], [30,40], [40,60]........];