var urls = [
  "image/tunnel1.jpg",
  "image/tunnel2.jpg",
  "image/tunnel3.jpg",
  "image/tunnel4.jpg",
  "image/tunnel5.jpg",
  "image/tunnel6.jpg",
  "image/tunnel7.jpg",
  "image/tunnel8.jpg",
  "image/tunnel9.jpg",
  "image/tunnel10.jpg",
  "image/tunnel11.jpg",
  "image/tunnel12.jpg",
  "image/tunnel13.jpg",
  "image/tunnel14.jpg",
  "image/tunnel15.jpg",
  "image/tunnel16.jpg",
  "image/tunnel17.jpg",
  "image/tunnel18.jpg",
  "image/tunnel19.jpg",
  "image/tunnel20.jpg",
  "image/tunnel21.jpg",
  "image/tunnel22.jpg",
  "image/tunnel23.jpg",
  "image/tunnel24.jpg",
  "image/tunnel25.jpg",
  "image/tunnel26.jpg",
  "image/tunnel27.jpg",
  "image/tunnel28.jpg",
  "image/tunnel29.jpg",
  "image/tunnel30.jpg",
  "image/tunnel31.png"
]

showRandomImage();

//var index = 0;
$(".catalog").on("click",function(){
  showRandomImage();
});


var t = setInterval(showRandomImage,3000);


function showRandomImage() {
  var index = Math.floor(Math.random() * urls.length);
  // index = index + 1;

  var new_url = urls[index];
  $("#image").attr("src",new_url);
}


$(document).ready(function(){
  $("#showVids").click(function(){
    location.href = "../vid/index.html";
  });
  $("#showInfo").click(function(){
    location.href = "../info/index.html";
  });
  $("#showPics").click(function(){
    location.href = "../slideshow/index.html";
  });
  $("#backHome").click(function(){
    location.href = "../../index.html";
  });
});
