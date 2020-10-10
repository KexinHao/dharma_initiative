// var ua = navigator.userAgent.toLowerCase();
// if (ua.indexOf('safari') != -1) {
//   if (ua.indexOf('chrome') > -1) {
//     alert("1") // Chrome
//   } else {
//     alert("2") // Safari
//   }
// }


// alert(isSafari)
// var isSafari = !!navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && typeof document.body.style.webkitFilter !== "undefined" && !window.chrome;;
// alert(isSafari)
//
// if(isSafari ===false) {


	const canvas = document.getElementById('canvas');
	let input = document.getElementById('input');
	const ctx = canvas.getContext('2d');
	let navigation = document.getElementById("nav")

	// let valueScroll = 100+"px"
	// let level = document.getElementById("level")
	let level2 = document.getElementById("level2")
	let level3 = document.getElementById("level3")
	let level4 = document.getElementById("level4")
	let level5 = document.getElementById("level5")
	let level6 = document.getElementById("level6")
	let fired = false;

	const imagesLevel = document.querySelectorAll(".images")
	let sectionLevel = document.querySelectorAll(".lev")
	let sectionLevelArray = Array.from(sectionLevel)




		if ($('#photos')) {
			// alert("o")
			$(".section-artist .artist-images img").hover(function() {
				$('.name-artists').css('zIndex','-1')
				$(this).parent().siblings('.name-artists').css('zIndex','30');
				// $(this).siblings().css('position','relative');
			})


		}

		let innerCounter1 = 0;
		let innerCounter2 = 0;
		let innerCounter3 = 0;
		let innerCounter4 = 0;

		let innerCounter5 = 0;

	document.querySelector(".insertContainer").addEventListener("scroll", function(){
		//1 block
		if (this.scrollTop < imagesLevel[1].offsetTop*2 && fired===false) {
			// alert("fi<!--  -->re");
			document.querySelector(".transform1 ").classList.add("translate-transform1")
			document.querySelector(".transform2 ").classList.add("translate-transform2")
			fired = true;



	  }
		//2 block
		if (this.scrollTop >imagesLevel[1].offsetTop*2) {
			document.querySelector(".transform1 ").classList.remove("translate-transform1")
			document.querySelector(".transform2 ").classList.remove("translate-transform2")
			fired = false ;
		}


		//section #1

		if (this.scrollTop < imagesLevel[2].offsetTop-300) {
			level2.classList.add("highlighted")
			level3.classList.remove("highlighted")

			innerCounter2 = 0;
			if (innerCounter1==0) {
				$(".lev").next().find( "img" ).removeClass("blended")
				if($("#lev-1").next().find( "img" ).css("mix-blend-mode") !== "screen") {
					console.log("aaa");
					$("#lev-1").next().find( "img" ).addClass("blended")

				}
				if($("#lev-2").next().find( "img" ).css("mix-blend-mode") !== "screen") {
					// console.log("aaa");
					$("#lev-2").next().find( "img" ).addClass("blended")

				}
				innerCounter1++;
			}





		}
		//section #2
		else if (this.scrollTop > imagesLevel[2].offsetTop-300 && this.scrollTop <imagesLevel[4].offsetTop + 300) {
			level3.classList.add("highlighted")
			level2.classList.remove("highlighted")
			level4.classList.remove("highlighted")

			innerCounter1 = 0;
			innerCounter3 = 0;
			// innerCounter2 = 0;
			if (innerCounter2==0) {
				$(".lev").next().find( "img" ).removeClass("blended")

				if($("#lev-3").next().find( "img" ).css("mix-blend-mode") !== "screen") {
					console.log("aaa");
					$("#lev-2").next().find( "img" ).addClass("blended")
					$("#lev-3").next().find( "img" ).addClass("blended")
					$("#lev-4").next().find( "img" ).addClass("blended")
					$("#lev-5").next().find( "img" ).addClass("blended")

				}

				innerCounter2++;
			}


		}
		//section #3
		else if (this.scrollTop >imagesLevel[4].offsetTop && this.scrollTop <imagesLevel[6].offsetTop){
			innerCounter2 = 0;
			innerCounter4 = 0;
			level2.classList.remove("highlighted")
			level3.classList.remove("highlighted")
			level4.classList.add("highlighted")
			if (innerCounter3==0) {
				$(".lev").next().find( "img" ).removeClass("blended")

				if($("#lev-6").next().find( "img" ).css("mix-blend-mode") !== "screen") {

					console.log("aaa");
					$("#lev-5").next().find( "img" ).addClass("blended")
					$("#lev-6").next().find( "img" ).addClass("blended")
					$("#lev-7").next().find( "img" ).addClass("blended")

				}

				innerCounter3++;
			}
		}

		else if (this.scrollTop >imagesLevel[6].offsetTop &&this.scrollTop <imagesLevel[8].offsetTop+300){
			level4.classList.add("highlighted")
			level5.classList.remove("highlighted")
			level3.classList.remove("highlighted")

			innerCounter3 = 0;
			innerCounter5 = 0;


			if (innerCounter4==0) {
				$(".lev").next().find( "img" ).removeClass("blended")

				if($("#lev-8").next().find( "img" ).css("mix-blend-mode") !== "screen") {

					console.log("aaa");
					$("#lev-7").next().find( "img" ).addClass("blended")
					$("#lev-8").next().find( "img" ).addClass("blended")
					$("#lev-9").next().find( "img" ).addClass("blended")
					$("#lev-10").next().find( "img" ).addClass("blended")

				}

				innerCounter4++;
			}
		}
		else if (this.scrollTop >imagesLevel[8].offsetTop-300 && this.scrollTop <imagesLevel[9].offsetTop+300){

			innerCounter4 = 0;


			if (innerCounter5==0) {
				$(".lev").next().find( "img" ).removeClass("blended")

				if($("#lev-10").next().find( "img" ).css("mix-blend-mode") !== "screen") {

					console.log("aaa");
					$("#lev-9").next().find( "img" ).addClass("blended")
					$("#lev-10").next().find( "img" ).addClass("blended")
					$("#lev-11").next().find( "img" ).addClass("blended")


				}

				innerCounter5++;
			}



			level4.classList.remove("highlighted")
			level6.classList.remove("highlighted")
			level5.classList.add("highlighted")
			// level5.classList.remove("highlighted")
			// alert("ups")
		} else if (this.scrollTop >imagesLevel[9].offsetTop+300 && this.scrollTop <imagesLevel[11].offsetTop+300){



			// level4.classList.remove("highlighted")
			level6.classList.add("highlighted")
			level5.classList.remove("highlighted")
			// level5.classList.add("highlighted")
			// level5.classList.remove("highlighted")
			// alert("ups")
		} else if (this.scrollTop >imagesLevel[11].offsetTop+300 ){

			// level4.classList.remove("highlighted")
			level6.classList.remove("highlighted")
			// level5.classList.add("highlighted")
			// level5.classList.remove("highlighted")
			// alert("ups")
		}
	}, true)


	const levels = document.querySelectorAll("#nav ul li")


	levels.forEach((item, i) => {
		item.addEventListener("click", function () {
			// alert(i+1);
			if(i == 0) {
				// alert(i);
				imagesLevel[0].scrollIntoView({ block: 'start', behavior: 'smooth', inline:"start" });

			}
			else if(i==1) {
				// console.log(imagesLevel[1])
				imagesLevel[2].scrollIntoView({ block: 'start', behavior: 'smooth', inline:"start" });

			} else if(i==2) {
				// console.log(imagesLevel[1])
				imagesLevel[5].scrollIntoView({ block: 'start', behavior: 'smooth', inline:"start" });

			} else if(i==3) {
				// console.log(imagesLevel[1])
				imagesLevel[9].scrollIntoView({ block: 'start', behavior: 'smooth', inline:"start" });

			} else if(i==4) {
				// console.log(imagesLevel[1])
				imagesLevel[10].scrollIntoView({ block: 'start', behavior: 'smooth', inline:"start" });

			}

		})
		// item.addEventListener("click", clickHandler(i))
	});


	function clickHandler(numberLevel) {
	  // e.preventDefault();

	  // const href = this.getAttribute("href");
	  // const offsetTop = document.querySelector(href).offsetTop;

		// if(numberLevel==1) {
		// 	alert(numberLevel);
		// 	// scroll({
	  //   top: offsetTop,
	  //   behavior: "smooth"
	  // });
		// }

	  // scroll({
	  //   top: window.innerHeight,
	  //   behavior: "smooth"
	  // });
	}




	function move() {
		var elem = document.getElementById("moveBar");
		var width = 0;
		var idVar = setInterval(change, 250);
		let randomNumber = 2


		function change() {
			if (input.value > 887570260646934643447331273312596933846447331259693373543698140232874500619768489156911231237123872198372718937123789217392312371298738912738273733125969337354369814023287450061976848915691123123712387219837271893712378921739231237129873891273827382782738273827382738464379127384643791273973827382787) {
				clearInterval(idVar)
			}
			else {
				width++;
				randomNumber = Math.round(Math.random() * 10)
				input.value = input.value + randomNumber
				update();
			}
		}
	}

	function update() {

		// console.log(input.value);



		// determine canvas size
		let h = 1;
	  let x = BigInt(input.value);
	  if (x < 1n) throw new Error('Must be a positive integer.');
	  let max = x;
	  while (x !== 1n) {
	    if (x % 2n === 0n) {
	      x = x >> 1n;
	    } else {
	      x = 3n * x + 1n;
	      h++;
	    }
	    if (x > max) max = x;
	  }
	  let w = 1;
	  x = max;
	  while (x !== 0n) {
	    w++;
	    x = x / 2n;
	  }

	  canvas.width = w;
	  canvas.height = h;
	  canvas.style.width = `${8 * w}px`;

	  const imgData = ctx.getImageData(0, 0, w, h);
	  x = BigInt(input.value);
	  let y = 0;
	  while (x !== 1n) {
	    let i = w - 1;
	    let k = x;
	    if (k % 2n === 1n) {
	      while (k !== 0n) {
	        const j = 4 * (y * w + i);
	        const v = k % 2n === 1n ? 0 : 255;
	        imgData.data[j + 0] = v;
	        imgData.data[j + 1] = v;
	        imgData.data[j + 2] = v;
	        imgData.data[j + 3] = 255;
	        k >>= 1n;
	        i--;
	      }
	      y++;
	    }
	    x = x % 2n === 0n ? x >> 1n : 3n * x + 1n;
	  }
	  ctx.putImageData(imgData, 0, 0);
	}
	// var myvar = document.getElementById("mydivID").style.display;
	let x = document.getElementById("mainphotos").style.display;

	$('.title').click(function(){


			if($(this).attr('id')=="photos") {
				// document.body.classList.add("changedBackground");
				// $('.mainbox').style.overflow="hidden";
				move();
				 update();
				 input.oninput = update;
			} else {
				document.body.classList.remove("changedBackground");
			}
		 });

// } else {
// 	alert("all but safari")
// }



// alert(x)
// if ((window.getComputedStyle(x).display === "none")) {
// 	alert("log")
	// move();
	// update();
	// input.oninput = update;
// 	document.body.classList.add("changedBackground");
// }
// if(document.querySelector("#mainphotos").style.display==="block") {
// 	alert("on")
// 	move();
// 	update();
// 	input.oninput = update;
// }


// document.querySelector(".insertContainer").onscroll = function() {
// 	// console.log(imagesLevel[1].offsetTop);
//
//
// 	if (this.scrollTop > imagesLevel[1].offsetTop &&this.scrollTop <imagesLevel[1].offsetTop*2) {
//
// 		alert("works")
// 		level.classList.remove("highlighted")
// 		level2.classList.add("highlighted")
//
// 	} else if (this.scrollTop < imagesLevel[1].offsetTop) {
// 		level.classList.add("highlighted")
// 		level2.classList.remove("highlighted")
// 	} else if (this.scrollTop >imagesLevel[1].offsetTop*2){
// 		level.classList.remove("highlighted")
// 		level2.classList.remove("highlighted")
// 	}
//
//
// };
