console.log("carlot.reset.js is on deck")

var CarLot = (function (cl) {
    cl.changeStuffOnPage = function (targetedCar) {
    console.log("changestuffonpage is here");
    console.log("target?", targetedCar)
    console.log("target style border?", targetedCar.style.border)
    // var carStyleRemoved = targetedCar.style.border;
    // console.log("border of the car being removed", carStyleRemoved)
    // targetedCar.removeAttribute("style");
    console.log("current border", targetedCar.style.border)
    targetedCar.classList.add("bigBorder");
    var textInputBox = document.getElementById("textInputField");
    textInputBox.removeAttribute("disabled");
    textInputBox.focus();
    document.getElementById("textInputButton").removeAttribute("disabled");
  },
  cl.resetToOriginal = function (callback) {
    console.log("resetToOriginal is on deck");
    console.log(callback);
    var removeStyle = document.querySelectorAll(".myCars");
    for (var i = removeStyle.length - 1; i >= 0; i--) {
      removeStyle[i].classList.remove("bigBorder");
    }
  }
  return (cl)
}(CarLot));