function hamburgerMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

$(".oops").on("click", function () {
  $(".custom-model-main").addClass("model-open");
});
$(".close-btn, .bg-overlay").click(function () {
  $(".custom-model-main").removeClass("model-open");
});

// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("topnav");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

function getOption() { 
    selectElement = document.querySelector('#locations'); 
    output = selectElement.value;
    document.querySelector('.output').textContent = output; 
} 


// function myFunction(save) {
//   save.classList.toggle("fa-solid fa-heart");
// }

// // Get the modal
// let modal1 = document.getElementById("mapModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// const img = document.getElementById("map");
// const modalImg1 = document.getElementById("mapLrg");
// img.onclick = function(){
//   modal1.style.display = "block";
//   modalImg1.src = this.src;
// }

// let modal2 = document.getElementById("imgModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// const img = document.getElementById("trailImg");
// const modalImg2 = document.getElementById("trailImgLrg");
// const captionText = document.getElementById("caption");
// img.onclick = function () {
//   modal2.style.display = "block";
//   modalImg2.src = this.src;
//   captionText.innerHTML = this.alt;
// };

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal1.style.display = "none";
//   modal2.style.display = "none";

// }