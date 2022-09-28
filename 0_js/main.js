function myFunction1() {
  var x = document.getElementById("whole-column-toggle-1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction2() {
  var x = document.getElementById("whole-column-toggle-2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

$(document).ready(function(){
  $('#ep1').click(function(){
    location.href = "tunnel/tunnel.html";
  });
  $('#ep2').click(function(){
    location.href = "dunes/dunes.html";
  });
  $("#ep3").click(function(){
    location.href = "birdsong.html";
  });
  $("#ep4").click(function(){
    location.href = "greenhouse.html";
  });
  $("#ep5").click(function(){
    location.href = "exmouth.html";
  });
  $("#ep6").click(function(){
    location.href = "morning.html";
  })
  $("#ep7").click(function(){
    location.href = "ep7/ep7.html";
  });

});
