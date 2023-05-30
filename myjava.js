


// Modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("case1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "https://i.ibb.co/qk3n4TK/bruce-cover.jpg";
  captionText.innerHTML = "In this project, I aimed to enhance the Bruce app by introducing a new feature that allows selected users to access the classes of a studio at no cost.  Bruce is a health and fitness app that enables its users to join classes offered by a variety of studios and gyms in some cities of Sweden and Norway by purchasing a membership or credits.";
}




var img2 = document.getElementById("case2");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "https://i.ibb.co/D1pPt6q/asana-cover.jpg";
  captionText.innerHTML = "In this design, I changed the colors to match the hierarchy established in the light theme. By selecting these colors, the contrast ratio remains within the acceptable range, ensuring that all text is legible.";
}


var img3 = document.getElementById("case3");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "https://i.ibb.co/5k8w6jz/ecombooster-cover.jpg";
  captionText.innerHTML = "I participated in this project as a UI designer and in a team we went through a design process and analysed the previous design, conducted a UX research and finally landed on an interface that better could answer to the user needs";
}



var img4 = document.getElementById("case4");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "https://i.ibb.co/CsGkDzG/tada-cover.jpg";
  captionText.innerHTML = "As a UX designer I decided to explore online yoga practicing and find out the right problem and possible solution for that.";
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}