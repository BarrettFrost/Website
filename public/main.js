"use strict";
class Giants {
 constructor(){
  
  var data;
  $.getJSON('api/animals', function(json){
    data = json;
    checkAnimals();
  });
  function checkAnimals(){
    console.log(data);
  }
  /*let animals;
  let showAnimals = function(){
    for(let prop in animals){
      console.log(prop);
      console.log(animals[prop]);
    };
  }

  fetch('http://localhost:8080/api/animals')
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      console.log(data);
      animals = data;
      showAnimals();
    });
    this.animals = animals;
    console.log(animals);
   
     this.animals = [];
    this.animals.push(this.string);
    console.log(this.animals[0].length);*/
  this.animals = [
   {
     id: 0,
    name: "Sauroposiden",
    length: 34,           
    source: "./png/Sauroposiden.png",
    extinct: "yes"
   },
   {
    id: 1,
    name: "Blue whale",
    length: 30,           
    source: "./png/Blue-whale.png",
    extinct: "no"
   },
   {
    id: 2,
    name: "Spinosaurus",
    length: 18,
    source: "./png/Spinosaurus.png",
    extinct: "yes"
   },
   {
    id: 3,
    name: "Megalodon",
    length: 18,
    source: "./png/megalodon.png",
    extinct: "yes"
  },
 ] 
 console.log(this.animals);
 }

 makebuttons(){
    for(var i = 0; i < this.animals.length; i++){
      var button = document.createElement('button');
      button.innerHTML = this.animals[i].name;
      document.getElementById('column').appendChild(button);
      button.addEventListener("click", this.clickButton.bind(this, i));
    }
  }

 clickButton(i){
   var png = document.getElementById(this.animals[i].name);
   if(png.style.display === "none"){
      png.style.display = "block";
    }
  else{
      png.style.display = "none";
  }
  }

sizeImage(){
  var height;
  for(var i = 0; i < this.animals.length; i++){
      var image = document.createElement('img');
      console.log(this.animals[i].source);
      image.setAttribute("src", this.animals[i].source);
      image.setAttribute("class", "image");
      image.setAttribute("id", this.animals[i].name);
      image.setAttribute("width", this.animals[i].length *25);
      image.style.display = "none";
      document.getElementById('box').appendChild(image);
      height = this.placeImage(this.animals[i].length *25, this.animals[i].name, i);
      console.log(height);
      image.style.top = height+ 'px';
  }
}
   placeImage(width, animalname, i){
       console.log(this.animals[i].name);
       var png = document.getElementById(this.animals[i].name);
       var height = (width / png.naturalWidth)* png.naturalHeight;
       console.log(png.naturalWidth + " " +png.naturalHeight);
       return 580 - height;
   }

   

}
   var animal = new Giants();
   animal.sizeImage();
   animal.makebuttons();

   window.onload = function() {
    if (!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}
