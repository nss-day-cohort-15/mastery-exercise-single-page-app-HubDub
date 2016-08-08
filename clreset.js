console.log("carlot.reset.js is on deck")

var CarLot = (function (cl) {
  cl.resetToOriginal = function (callback) {
    console.log("resetToOriginal is on deck");
    // console.log(event.currentTarget);
    var removeStyle = document.querySelectorAll(".myCars");
    for (var i = removeStyle.length - 1; i >= 0; i--) {
      // removeStyle.removeAttribute("style");
      removeStyle[i].classList.remove("bigBorder");
      // removeStyle[i].addAttribute("style:border:${car.color} solid 1px");
    }
    // event.currentTarget.sibling.removeAttribute("style");
    // event.currentTarget.sibling.addAttribute
  }
  return (cl)
}(CarLot));


// var elems = document.querySelectorAll(".widget.hover");

// [].forEach.call(elems, function(el) {
//     el.classList.remove("hover");
// });