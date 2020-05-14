"use strict";
  
  var animalData;
  $.getJSON('api/animals', function(json){
    animalData = json;
    checkAnimals();
    sizeImage();
    makebuttons();
  });
  function checkAnimals(){
    console.log(animalData);
  }
  
 function makebuttons(){
    for(var i = 0; i < animalData.data.length; i++){
      var button = document.createElement('button');
      button.innerHTML = animalData.data[i].name;
      document.getElementById('column').appendChild(button);
      button.addEventListener("click", clickButton.bind(this, i));
    }
  }

 function clickButton(index){
   var png = document.getElementById(animalData.data[index].name);
   if(png.style.display === "none"){
      png.style.display = "block";
      displayDetails(index);
      
    }
  else{
      png.style.display = "none";
      var element = document.getElementById(animalData.data[index].id).remove();
  }

  }

 function sizeImage(){
  var height;
  console.log(animalData.data.length);
  for(var i = 0; i < animalData.data.length; i++){
      var image = document.createElement('img');
      console.log(animalData.data[i].image);
      image.setAttribute("src", animalData.data[i].image);
      image.setAttribute("class", "image");
      image.setAttribute("id", animalData.data[i].name);
      image.setAttribute("width", animalData.data[i].length *25);
      image.style.display = "none";
      document.getElementById('box').appendChild(image);
      height = placeImage(animalData.data[i].length *25, animalData.data[i].name, i);
      console.log(height);
      image.style.top = height+ 'px';
  }
}
   function placeImage(width, name, i){
       console.log(name);
       var png = document.getElementById(name);
       var height = (width / png.naturalWidth)* png.naturalHeight;
       console.log(png.naturalWidth + " " +png.naturalHeight);
       return 580 - height;
   }
   
   function displayDetails(i){
    var para = document.createElement("P");             
    para.innerText = "extinct : " + animalData.data[i].extinct;
    para.id = animalData.data[i].id;           
    document.getElementById("details").append(para);
   }

   window.onload = function() {
    if (!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}
