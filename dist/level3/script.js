


const image_input = document.querySelector("#file");
var uploaded_image;
var height, width;

image_input.addEventListener('change', function(e) {
  const reader = new FileReader();
  console.log(e?.target?.files[0]);
  let img = new Image()
img.src = window.URL.createObjectURL(e.target.files[0])
img.onload = () => {
   width=img.width;
   height=img.height;
   console.log({width,height})
   document.querySelector("#file").style.display = "none";
   var drags = document.getElementsByClassName("drag");
   var drops = document.getElementsByClassName("drop");
   document.querySelector("#text").style.height = `${1200*height/width}px`;
    for(var i=0; i<10; i++){
        drags[i].style.height = `${1200*height/width}px`;
        drops[i].style.height = `${1200*height/width}px`;
    }
    reader.addEventListener('load', () => {
      uploaded_image = reader.result;
      var drags = document.getElementsByClassName("drag");
      for(var i=0; i<10; i++){
          console.log(i);
          drags[i].style.backgroundImage = `url(${uploaded_image})`;
          drags[i].style.backgroundPosition = `${i*100}% 0%`;
          drags[i].style.backgroundSize = `1000% auto`;
      }
    });
    reader.readAsDataURL(this.files[0]);
}
  
});




function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}