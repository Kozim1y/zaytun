const elBurgerBtn = document.querySelector(".burger");
const elCanvasHeaderBack = document.querySelector(".canvas-header_back");
const elCanvasHeader = document.querySelector(".canvas_header");

elBurgerBtn.addEventListener("click", function () {
  elCanvasHeaderBack.classList.add("canvas-header_back--active");
  elCanvasHeader.classList.add("canvas_header--active");
});

elCanvasHeaderBack.addEventListener("click", function (evt) {
  if (
    evt.target.matches(".canvas-header_back") ||
    evt.target.matches(".canvas-header_remove-icon")
  ) {
    elCanvasHeaderBack.classList.remove("canvas-header_back--active");
    elCanvasHeader.classList.remove("canvas_header--active");
  }
});

// If add food = true;
const addFoodBtn = document.querySelector(".famous-food_item-btn");
const notificationBox = document.querySelector(".add-food_alert");
const mainTag = document.querySelector("main");

mainTag.addEventListener("click", function(evt) {
  const target = evt.target;
  if(target.matches(".famous-food_item-btn")) {
    notificationBox.classList.toggle("add-food_alert--active")
  }
})
