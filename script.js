window.addEventListener("load", function () {
  var shapeElement = document.querySelector(".shape");
  var frames = [
    { background: "red", transform: "translateX(0px)" },
    { background: "blue" },
    { background: "yellow", transform: "translateX(600px)" },
  ];
  var timing = {
    duration: 3000,
    iterations: Infinity,
  };
  shapeElement.animate(frames, timing);
});
