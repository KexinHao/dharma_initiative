var urls = [
  "image/allpics/tunnel1.jpg",
  "image/allpics/tunnel2.jpg",
  "image/allpics/tunnel3.jpg",
  "image/allpics/tunnel4.jpg",
  "image/allpics/tunnel5.jpg",
  "image/allpics/tunnel6.jpg",
  "image/allpics/tunnel7.jpg",
  "image/allpics/tunnel8.jpg",
  "image/allpics/tunnel9.jpg",
  "image/allpics/tunnel10.jpg",
  "image/allpics/tunnel11.jpg",
  "image/allpics/tunnel12.jpg",
  "image/allpics/tunnel13.jpg",
  "image/allpics/tunnel14.jpg",
  "image/allpics/tunnel15.jpg",
  "image/allpics/tunnel16.jpg",
  "image/allpics/tunnel17.jpg",
  "image/allpics/tunnel18.jpg",
  "image/allpics/tunnel19.jpg",
  "image/allpics/tunnel20.jpg",
  "image/allpics/tunnel21.jpg",
  "image/allpics/tunnel22.jpg",
  "image/allpics/tunnel23.jpg",
  "image/allpics/tunnel24.jpg",
  "image/allpics/tunnel25.jpg",
  "image/allpics/tunnel26.jpg",
  "image/allpics/tunnel27.jpg",
  "image/allpics/tunnel28.jpg",
  "image/allpics/tunnel29.jpg",
  "image/allpics/tunnel30.jpg",
  "image/allpics/tunnel31.png"
]

showRandomImage();
var t = setInterval(showRandomImage,3000);
function showRandomImage() {
  var index = Math.floor(Math.random() * urls.length);
  // index = index + 1;
  var new_url = urls[index];
  $("#img1").attr("src",new_url);
}

showRandomImage2();
var t = setInterval(showRandomImage2,3000);
function showRandomImage2() {
  var index = Math.floor(Math.random() * urls.length);
  // index = index + 1;
  var new_url = urls[index];
  $("#img2").attr("src",new_url);
}

showRandomImage3();
var t = setInterval(showRandomImage3,3000);
function showRandomImage3() {
  var index = Math.floor(Math.random() * urls.length);
  // index = index + 1;
  var new_url = urls[index];
  $("#img3").attr("src",new_url);
}

showRandomImage4();
var t = setInterval(showRandomImage4,3000);
function showRandomImage4() {
  var index = Math.floor(Math.random() * urls.length);
  // index = index + 1;
  var new_url = urls[index];
  $("#img4").attr("src",new_url);
}

showRandomImage5();
var t = setInterval(showRandomImage5,3000);
function showRandomImage5() {
  var index = Math.floor(Math.random() * urls.length);
  // index = index + 1;
  var new_url = urls[index];
  $("#img5").attr("src",new_url);
}

showRandomImage6();
var t = setInterval(showRandomImage6,3000);
function showRandomImage6() {
  var index = Math.floor(Math.random() * urls.length);
  // index = index + 1;
  var new_url = urls[index];
  $("#img6").attr("src",new_url);
}

showRandomImage7();
var t = setInterval(showRandomImage7,3000);
function showRandomImage7() {
  var index = Math.floor(Math.random() * urls.length);
  // index = index + 1;
  var new_url = urls[index];
  $("#img7").attr("src",new_url);
}

showRandomImage8();
var t = setInterval(showRandomImage8,3000);
function showRandomImage8() {
  var index = Math.floor(Math.random() * urls.length);
  // index = index + 1;
  var new_url = urls[index];
  $("#img8").attr("src",new_url);
}

showRandomImage9();
var t = setInterval(showRandomImage9,3000);
function showRandomImage9() {
  var index = Math.floor(Math.random() * urls.length);
  // index = index + 1;
  var new_url = urls[index];
  $("#img9").attr("src",new_url);
}



$(document).ready(function(){
  $("#img1").click(function(){
    location.href = "video.html";
  });
  $("#img2").click(function(){
    location.href = "video.html";
  });
  $("#img3").click(function(){
    location.href = "video.html";
  });
  $("#img4").click(function(){
    location.href = "video.html";
  });
  $("#img5").click(function(){
    location.href = "video.html";
  });
  $("#img6").click(function(){
    location.href = "video.html";
  });
  $("#img7").click(function(){
    location.href = "video.html";
  });
  $("#img8").click(function(){
    location.href = "video.html";
  });
  $("#img9").click(function(){
    location.href = "video.html";
  });
  $("#episode1").click(function(){
    location.href = "video.html";
  });
  $("#episode2").click(function(){
    location.href = "../dunes/dunes.html";
  });
  $("#episode3").click(function(){
    location.href = "../birdsong.html";
  });
});
