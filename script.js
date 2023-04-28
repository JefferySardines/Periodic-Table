var elements = document.querySelectorAll(".element");

elements.forEach(function(element) {
  element.addEventListener("click", function() {
    element.classList.toggle("selected");
  });
});
