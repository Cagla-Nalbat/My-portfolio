//NAVBAR//
const nav = document.querySelector(".tabs-container");

const offset = nav.offsetTop;

window.addEventListener("scroll", function () {
  if (window.scrollY >= offset) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

//GAME//
const cat = document.querySelector("#cat");
const cuc = document.querySelector("#cuc");

function jump() {
  if (cuc.classList != "cuc-animate") {
    //////SCORE if>if random.float
    cuc.classList.add("cuc-animate");
  }

  if (cat.classList != "cat-animate") {
    cat.classList.toggle("cat-animate");
    setTimeout(function () {
      cat.classList.remove("cat-animate");
    }, 500); //cat jump
  }
}
let smash = setInterval(function () {
  let catBottom = parseInt(
    window.getComputedStyle(cat).getPropertyValue("bottom")
  );

  console.log(catBottom);

  let cucLeft = parseInt(window.getComputedStyle(cuc).getPropertyValue("left"));

  console.log("cucLeft");

  if (cucLeft > 0 && cucLeft < 61 && catBottom < 54) {
    cuc.classList.remove("cuc-animate");
    cuc.style.display = "none";
    // alert = "Oyun bitti";
  }
}, 10); //alert time
