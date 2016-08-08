console.log("carlot.reset.js is on deck")

var CarLot = (function (cl) {
  cl.resetToOriginal = function (callback) {
    console.log("resetToOriginal is on deck");
    var removeStyle = document.querySelectorAll(".myCars");
    for (var i = removeStyle.length - 1; i >= 0; i--) {
      removeStyle[i].classList.remove("bigBorder");
      // removeStyle[i].addAttribute("style:border:${car.color} solid 1px");
    }
    var newInventory = CarLot.getInventory();
    console.log(newInventory);
    var inventoryPost = document.getElementById("carsGoHere");
    // newInventory.forEach (function(car) {
    //   inventoryPost.innerHTML += `style="border:${car.color} solid 5px"`
    // })
  }
  return (cl)
}(CarLot));