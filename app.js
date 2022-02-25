let counter = 1;
let lastSlide = 1;
showSlide(counter);//first slide loading

const previous_btn = document.getElementById("previous");
const next_btn = document.getElementById("next");
const slides = document.getElementsByClassName("slider__images");
const numbers = document.getElementsByClassName("number");
previous_btn.addEventListener("click", changeSlide);
next_btn.addEventListener("click", changeSlide);

Array.from(numbers).forEach(element => {
  element.addEventListener("click", slideChangeWithNumber);
});

function slideChangeWithNumber(event) {

  const lastSlideIndex = lastSlide;
  const hide_image = document.getElementById(`slide-${lastSlideIndex}`);

  counter = Number(event.target.id);

  setTimeout(function () {
    if (lastSlideIndex != counter) {
      hide_image.style.display = "none";
    }
  }, 500);

  if (lastSlideIndex < counter) {
    hide_image.style.animation = "slideleft 500ms forwards";
  }
  else if (lastSlideIndex > counter) {
    hide_image.style.animation = "slideright 500ms forwards";
  }

  showSlide(counter);
}

function changeSlide(event) {

  const hide_image = document.getElementById(`slide-${counter}`);
  const clicked_button = event.target;
  clicked_button.setAttribute("disabled", "true");

  setTimeout(function () {
    hide_image.style.display = "none";
    clicked_button.removeAttribute("disabled");
  }, 500);

  if (clicked_button.id == "next") {
    hide_image.style.animation = "slideleft 500ms forwards";
    if (counter == slides.length) {
      counter = 1;
    } else {
      counter += 1;
    }
  }
  else if (clicked_button.id == "previous") {
    hide_image.style.animation = "slideright 500ms forwards";
    if (counter == 1) {
      counter = slides.length;
      lastSlide = slides.length;
    } else {
      counter -= 1;
    }
  }
  showSlide(counter, clicked_button);
}

function showSlide(slideNumber, clicked_button = "") {

  //highlighting the numbers
  if(lastSlide == 5){
    const firstNumber = document.getElementById(`1`);
    firstNumber.classList.remove("active");
  }
  const hide_image = document.getElementById(`${lastSlide}`);
  hide_image.classList.remove("active");
  const highlight_number = document.getElementById(`${counter}`);
  highlight_number.classList.add("active");

  const show_image = document.getElementById(`slide-${slideNumber}`);
  show_image.style.display = "block";

  if (clicked_button.id == "next" || lastSlide < slideNumber) {
    show_image.style.animation = "nextslideleft 500ms forwards";
    console.log("hello");
  }
  else if (clicked_button.id == "previous" || lastSlide > slideNumber) {
    show_image.style.animation = "nextslideright 500ms forwards";
  }

  //get last slide number for moving the last slide when change slide using numbers button
  lastSlide = slideNumber;

}