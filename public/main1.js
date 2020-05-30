"use strict";

var animalData;
var classURL;
$.getJSON('api/animals', function(json){
  animalData = json;
  checkAnimals();
  sizeImage();
  makebuttons();
  displayDetails(null);
});

function checkAnimals(){
  console.log(animalData);
}

function dropBoxEventButton(){
  var submit = document.getElementById("dropBox");
  console.log(submit.value)
  submit.addEventListener("click", function(){
    classURL = "api/animals/" + submit.value;
    if(submit.value === "All"){
      $.getJSON("api/animals", function(json){
        document.getElementById("column").innerHTML = "";
        animalData = json;
        checkAnimals();
        sizeImage();
        makebuttons();
      })
      location.reload;
    }
    else{
      $.getJSON(classURL, function(json){
        document.getElementById("column").innerHTML = "";
        console.log(classURL);
        animalData = json;
        checkAnimals();
        sizeImage();
        makebuttons();
      })
      location.reload;
    }
  })
}

/*Animal selection buttons*/
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
      /*displayDetails(index);*/
  }
  else{
    png.style.display = "none";
    /*var element = document.getElementById(animalData.data[index].id).remove();*/
  }
}

 function sizeImage(){
  var height;
  console.log(animalData.data.length);
  for(var i = 0; i < animalData.data.length; i++){
      var image = document.createElement('img');
      /*not visible by default*/
      image.style.display = "none";
      console.log(animalData.data[i].image);

      /*attributes*/
      image.setAttribute("src", animalData.data[i].image);
      image.setAttribute("class", "image");
      image.setAttribute("id", animalData.data[i].name);
      image.setAttribute("width", (animalData.data[i].length*window.innerWidth*0.017));

      /*mouseover to see details*/
      image.onmouseover = function() {displayDetails(this.id)};
      image.onmouseout = function() {displayDetails(null)};

      document.getElementById('box').appendChild(image);
      /*below does nothing ^^"*/
      /*height = placeImage(animalData.data[i].length, animalData.data[i].name, i);*/
      console.log(height);
      image.style.marginLeft="5%";
  }
}
/*function placeImage(width, name, i){
   console.log(name);
   var png = document.getElementById(name);
   var height = (width / png.naturalWidth)* png.naturalHeight;
   console.log(png.naturalWidth + " " +png.naturalHeight);
   return 580 - height;
}*/

function displayDetails(name){
  var para = document.getElementById("details");

  if(name === null){
    para.innerHTML = "Hover over an animal to see its details!";
  }else{
    for(var i = 0; i < animalData.data.length; i++){
      if(!name.localeCompare(animalData.data[i].name)){
        para.innerHTML = "name: " + animalData.data[i].name;
        para.innerHTML += "<br/>";
        para.innerHTML += "extinct: " + animalData.data[i].extinct;
        para.innerHTML += "<br/>";
        para.innerHTML += "length: " + animalData.data[i].length + " m";
        para.innerHTML += "<br/>";
        para.innerHTML += "mass: " + animalData.data[i].weight;
        para.innerHTML += "<br/>";
        para.innerHTML += "class: " + animalData.data[i].class;
        para.innerHTML += "<br/>";
        para.innerHTML += "Title: " + animalData.data[i].desc;
      }
    }
  }
}

window.onload = function(){
  if (!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
  }
}
