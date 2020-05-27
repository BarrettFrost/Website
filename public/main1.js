"use strict";
  
  var animalData;
  var classURL;
  $.getJSON('api/animals', function(json){
    animalData = json;
    checkAnimals();
    sizeImage();
    makebuttons();
  });
  dropBoxEvent();
  function checkAnimals(){
    console.log(animalData);
  }
  
  function dropBoxEvent(){
    var submit = document.getElementById("dropBox");
    submit.addEventListener("click", function(){
      classURL = "api/animals/" + document.getElementById("dropBox").value;
    })
    console.log("hello"+classURL);
    $.getJSON(classURL, function(json){
      animalData = json;
      checkAnimals();
      sizeImage();
      makebuttons();
    })

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
    para.innerHTML = "name : " + animalData.data[i].name;
    para.innerHTML += "<br/>";
    para.innerHTML += "extinct : " + animalData.data[i].extinct;
    para.innerHTML += "<br/>";
    para.innerHTML += "length : " + animalData.data[i].length + " m";
    para.innerHTML += "<br/>";
    para.innerHTML += "mass : " + animalData.data[i].weight;
    para.innerHTML += "<br/>";
    para.innerHTML += "class : " + animalData.data[i].class;
    para.innerHTML += "<br/>";
    para.innerHTML += "Title : " + animalData.data[i].desc;
    para.id = animalData.data[i].id;           
    document.getElementById("details").append(para);
   }

   window.onload = function() {
    if (!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
   }
   window.onload = function() {
    if (!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
   }
