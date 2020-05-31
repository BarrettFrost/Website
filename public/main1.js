"use strict";

var animalData;
var classURL;

window.onload = function(){
  if (!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
  }
}

$.getJSON('api/animals', function(json){
  animalData = json;
  dropBoxEventButton();
  resetSiteElements();
});

function resetSiteElements(){
  checkAnimals();
  placeImage();
  makeButtons();
  displayDetails(null);
  checkBoxElementsPosition();
}

function checkAnimals(){
  console.log(animalData);
}

function dropBoxEventButton(){
  var submit = document.getElementById("dropBox");
  console.log(submit.value)
  submit.onchange = function(){
    /*clear existing images, or 'details' will break*/
    clearImages();

    classURL = "api/animals/" + submit.value;
    if(submit.value === "All"){
      $.getJSON("api/animals", function(json){
        document.getElementById("column").innerHTML = "";
        animalData = json;
        resetSiteElements();
      })
      location.reload;
    }
    else{
      $.getJSON(classURL, function(json){
        document.getElementById("column").innerHTML = "";
        console.log(classURL);
        animalData = json;
        resetSiteElements();
      })
      location.reload;
    }
  }
}

/*Animal selection buttons*/
function makeButtons(){
  for(var i = 0; i < animalData.data.length; i++){
    var button = document.createElement('button');
    button.setAttribute("class", "btn btn-light");

    button.innerHTML = animalData.data[i].name;
    document.getElementById('column').appendChild(button);
    button.addEventListener("click", clickButton.bind(this, i));
  }
}

function clickButton(index){
  var png = document.getElementById(animalData.data[index].name);
  if(png.style.display === "none"){
    png.style.display = "block";
  }
  else{
    png.style.display = "none";
  }
  checkBoxElementsPosition();
}

 function placeImage(){
  var height;
  console.log(animalData.data.length);
  for(var i = 0; i < animalData.data.length; i++){
      var image = document.createElement('img');
      /*not visible by default*/
      image.style.display = "none";
      console.log(animalData.data[i].image);

      /*attributes*/
      image.setAttribute("src", animalData.data[i].image);
      image.setAttribute("class", "images-single");
      image.setAttribute("id", animalData.data[i].name);
      image.setAttribute("width", (animalData.data[i].length*document.getElementById("box").offsetWidth*0.0225));

      /*mouseover to see details*/
      image.onmouseover = function() {displayDetails(this.id)};
      image.onmouseout = function() {displayDetails(null)};

      document.getElementById('images').appendChild(image);
      console.log(height);
      image.style.marginLeft="5%";
  }
}

function checkBoxElementsPosition(){
  /*ensures that the total height of elements in box are never less than its minHeight*/
  /*this is a roundabout way to keep "measurement" and "images" at the bottom of the box*/
  var box = document.getElementById("box");
  var images = document.getElementById("images");
  var human = document.getElementById("human");
  var measurement = document.getElementById("measurement");

  console.log((images.offsetHeight + human.offsetHeight +
    measurement.offsetHeight));

  if(400 > (images.offsetHeight + human.offsetHeight +
    measurement.offsetHeight)){
    images.style.marginTop = (400 - images.offsetHeight - human.offsetHeight -
      measurement.offsetHeight).toString() + "px";
  }else{
    images.style.marginTop = "0px";
  }
}

function displayDetails(name){
  var para = document.getElementById("details");

  if(name === null){
    para.innerHTML = "Mouse over/click on an animal to see its details!";
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

function clearImages(){
  var images = document.getElementsByClassName('images-single');
  for(var i = 0; i < images.length; i++){
    images[i].style.display="none";
  }
}
